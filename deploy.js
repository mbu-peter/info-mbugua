#!/usr/bin/env node

/**
 * Portfolio Deployment Script
 * Supports deployment to Vercel, Netlify, and GitHub Pages
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const platforms = {
  vercel: {
    name: 'Vercel',
    install: 'npm i -g vercel',
    deploy: 'vercel --prod',
    config: {
      version: 2,
      builds: [{ src: 'package.json', use: '@vercel/static-build' }],
      routes: [{ src: '/(.*)', dest: '/index.html' }]
    }
  },
  netlify: {
    name: 'Netlify',
    install: 'npm install -g netlify-cli',
    deploy: 'netlify deploy --prod --dir=dist',
    config: {
      build: {
        publish: 'dist',
        command: 'npm run build'
      },
      redirects: [
        { from: '/*', to: '/index.html', status: 200 }
      ]
    }
  },
  'github-pages': {
    name: 'GitHub Pages',
    install: 'npm install -g gh-pages',
    deploy: 'gh-pages -d dist',
    config: null
  }
};

function showHelp() {
  console.log(`
🚀 Portfolio Deployment Script

Usage: node deploy.js [platform]

Platforms:
  vercel        Deploy to Vercel
  netlify       Deploy to Netlify
  github-pages  Deploy to GitHub Pages

Examples:
  node deploy.js vercel
  node deploy.js netlify

Prerequisites:
- Node.js installed
- Project dependencies installed (npm install)
- Git repository initialized
- For Vercel: vercel account and CLI installed
- For Netlify: netlify account and CLI installed
- For GitHub Pages: gh-pages package installed
  `);
}

function checkPrerequisites(platform) {
  console.log('🔍 Checking prerequisites...');

  // Check if build exists
  if (!fs.existsSync('package.json')) {
    console.error('❌ package.json not found. Run npm install first.');
    process.exit(1);
  }

  // Check if dist exists, if not build
  if (!fs.existsSync('dist')) {
    console.log('📦 Building project...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
    } catch (error) {
      console.error('❌ Build failed. Check your code for errors.');
      process.exit(1);
    }
  }

  console.log('✅ Prerequisites check passed');
}

function deployToVercel() {
  console.log('🚀 Deploying to Vercel...');

  try {
    // Check if vercel CLI is installed
    execSync('vercel --version', { stdio: 'pipe' });
  } catch {
    console.log('📦 Installing Vercel CLI...');
    execSync('npm install -g vercel', { stdio: 'inherit' });
  }

  // Create vercel.json if it doesn't exist
  if (!fs.existsSync('vercel.json')) {
    fs.writeFileSync('vercel.json', JSON.stringify(platforms.vercel.config, null, 2));
    console.log('📄 Created vercel.json');
  }

  // Deploy
  execSync('vercel --prod', { stdio: 'inherit' });

  console.log('✅ Successfully deployed to Vercel!');
  console.log('🌐 Your portfolio is now live!');
}

function deployToNetlify() {
  console.log('🚀 Deploying to Netlify...');

  try {
    // Check if netlify CLI is installed
    execSync('netlify --version', { stdio: 'pipe' });
  } catch {
    console.log('📦 Installing Netlify CLI...');
    execSync('npm install -g netlify-cli', { stdio: 'inherit' });
  }

  // Create netlify.toml if it doesn't exist
  if (!fs.existsSync('netlify.toml')) {
    const config = platforms.netlify.config;
    let toml = '[build]\n';
    toml += `publish = "${config.build.publish}"\n`;
    toml += `command = "${config.build.command}"\n\n`;
    toml += '[[redirects]]\n';
    toml += `from = "${config.redirects[0].from}"\n`;
    toml += `to = "${config.redirects[0].to}"\n`;
    toml += `status = ${config.redirects[0].status}\n`;

    fs.writeFileSync('netlify.toml', toml);
    console.log('📄 Created netlify.toml');
  }

  // Deploy
  execSync('netlify deploy --prod --dir=dist', { stdio: 'inherit' });

  console.log('✅ Successfully deployed to Netlify!');
  console.log('🌐 Your portfolio is now live!');
}

function deployToGitHubPages() {
  console.log('🚀 Deploying to GitHub Pages...');

  try {
    // Check if gh-pages is installed
    execSync('gh-pages --version', { stdio: 'pipe' });
  } catch {
    console.log('📦 Installing gh-pages...');
    execSync('npm install -g gh-pages', { stdio: 'inherit' });
  }

  // Deploy
  execSync('gh-pages -d dist', { stdio: 'inherit' });

  console.log('✅ Successfully deployed to GitHub Pages!');
  console.log('🌐 Your portfolio is now live at: https://[username].github.io/[repository-name]/');
}

function main() {
  const args = process.argv.slice(2);
  const platform = args[0];

  if (!platform || platform === 'help' || platform === '--help' || platform === '-h') {
    showHelp();
    return;
  }

  if (!platforms[platform]) {
    console.error(`❌ Unsupported platform: ${platform}`);
    console.log('Supported platforms:', Object.keys(platforms).join(', '));
    process.exit(1);
  }

  console.log(`🎯 Deploying portfolio to ${platforms[platform].name}`);
  console.log('=' .repeat(50));

  checkPrerequisites(platform);

  switch (platform) {
    case 'vercel':
      deployToVercel();
      break;
    case 'netlify':
      deployToNetlify();
      break;
    case 'github-pages':
      deployToGitHubPages();
      break;
  }

  console.log('\n🎉 Deployment completed successfully!');
  console.log('📝 Next steps:');
  console.log('   - Update your personal information in constants.tsx');
  console.log('   - Replace placeholder project images with real screenshots');
  console.log('   - Update contact links with your actual profiles');
  console.log('   - Consider adding Google Analytics or other tracking');
}

if (require.main === module) {
  main();
}
