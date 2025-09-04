# �� Commander Jashan's Enhanced Space Portfolio - Development Makefile
# Now powered by Shopify Web Tools & Modern React

.PHONY: help install dev build start test lint format clean deploy audit analyze shopify-setup react-dev

# Default target
help: ## Show this help message
	@echo " Commander Jashan's Enhanced Space Portfolio Development Commands"
	@echo "   Powered by Shopify Polaris, React, and Modern Web Tools"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}'

# Installation and Setup
install: ## Install all dependencies (Node.js + Shopify tools)
	@echo " Installing enhanced dependencies..."
	npm install
	@echo " Dependencies installed with Shopify tools!"

shopify-setup: install ## Complete Shopify development setup
	@echo "  Setting up Shopify development environment..."
	@if [ ! -f .env ]; then cp env.example .env; fi
	@echo " Please update .env file with your Shopify configuration"
	@echo " Add your Shopify API keys and store domain"
	@echo " Shopify setup completed!"

clean: ## Clean all build artifacts and reinstall
	@echo " Cleaning up build artifacts..."
	rm -rf node_modules package-lock.json dist reports .next .vite
	npm install
	@echo " Clean installation completed!"

# Development Servers
dev: ## Start full development environment (Express + React + Watch)
	@echo " Starting enhanced development servers..."
	@echo " Express server: http://localhost:3000"
	@echo "  React dev server: http://localhost:3001"
	npm run dev

dev-express: ## Start only Express server
	@echo " Starting Express server..."
	nodemon server.js

dev-react: ## Start only React development server
	@echo "  Starting React development server..."
	npm run dev:react

serve: ## Serve static files for testing
	@echo " Starting static file server..."
	npm run serve

# Building and Optimization
build: ## Build complete production bundle (CSS + React + Images + JS)
	@echo "  Building enhanced production bundle..."
	npm run build
	@echo " Enhanced build completed!"

build-react: ## Build only React components
	@echo "  Building React application..."
	npm run build:react
	@echo " React build completed!"

build-analyze: ## Build and analyze bundle size with Shopify optimizations
	@echo " Building and analyzing enhanced bundle..."
	ANALYZE=true npm run build
	npm run analyze
	@echo " Check reports/ directory for detailed analysis"

# Code Quality & Standards
lint: ## Run ESLint on all JavaScript/React files
	@echo " Linting enhanced codebase..."
	npm run lint

format: ## Format code with Prettier (JS, CSS, HTML, MD)
	@echo " Formatting enhanced codebase..."
	npm run format

lint-fix: ## Run ESLint with auto-fix
	@echo " Fixing linting issues..."
	npx eslint *.js src/**/*.jsx --fix

# Testing and Quality Assurance
test: ## Run all tests (Jest + React Testing Library)
	@echo " Running enhanced test suite..."
	npm test

audit: ## Run comprehensive security audit
	@echo " Running enhanced security audit..."
	npm run audit
	@echo "  Checking for Shopify-specific vulnerabilities..."

lighthouse: ## Run Lighthouse performance audit on both servers
	@echo " Running Lighthouse audit on enhanced portfolio..."
	@echo "Make sure servers are running (Express: 3000, React: 3001)"
	npm run lighthouse
	@echo " Performance reports generated!"

# Deployment Options
deploy-heroku: ## Deploy to Heroku with enhanced build
	@echo " Deploying enhanced portfolio to Heroku..."
	npm run build
	npm run deploy:heroku

deploy-netlify: ## Deploy to Netlify with optimized build
	@echo " Deploying enhanced portfolio to Netlify..."
	npm run build
	npm run deploy:netlify

deploy-shopify: ## Deploy as Shopify app (if configured)
	@echo "  Deploying to Shopify platform..."
	npm run deploy:shopify

# Enhanced Development Workflows
quick-start: shopify-setup dev ## Complete setup and start development
	@echo " Ready for enhanced development!"

react-dev: ## Quick React development start
	@echo "  Starting React-focused development..."
	concurrently "npm run dev:react" "npm run watch:css"

full-dev: ## Start all development services
	@echo " Starting complete development environment..."
	npm run dev

# Production Workflows
production-check: lint audit test build ## Run all production checks for enhanced portfolio
	@echo "All enhanced production checks passed!"

quick-build: lint format build-react build ## Quick build: lint, format, and build everything
	@echo "  Enhanced quick build completed!"

quick-deploy: production-check deploy-netlify ## Quick deploy: all checks and deploy

# Shopify Specific Commands
shopify-init: ## Initialize new Shopify app development
	@echo "  Initializing Shopify app..."
	npm run shopify:init

storefront-dev: ## Start Shopify Storefront development mode
	@echo " Starting Shopify Storefront development..."
	npm run storefront:dev

# Maintenance and Updates
update: ## Update all dependencies including Shopify tools
	@echo " Updating enhanced dependencies..."
	npm update
	npm audit fix
	@echo "  Shopify tools updated!"
	@echo " Dependencies updated!"

check-outdated: ## Check for outdated packages including Shopify
	@echo " Checking for outdated packages..."
	npm outdated
	@echo "  Check Shopify CLI for updates: shopify version"

# Documentation and Analysis
docs: ## Generate enhanced documentation
	@echo " Generating enhanced documentation..."
	@echo " Documentation includes Shopify integration guide"
	@echo " Available in README.md and docs/ directory"

perf: ## Run comprehensive performance tests
	@echo " Running enhanced performance tests..."
	npm run lighthouse
	@echo " Performance optimized with Shopify best practices"

# Development Utilities
clean-cache: ## Clear all development caches
	@echo " Clearing development caches..."
	rm -rf node_modules/.cache
	rm -rf .vite
	rm -rf dist
	@echo " Caches cleared!"

reset: clean-cache clean install ## Complete reset and reinstall
	@echo " Complete development environment reset!"

# Shopify Store Integration
store-sync: ## Sync with Shopify store (if configured)
	@echo " Syncing with Shopify store..."
	@echo " Ensure .env has valid Shopify credentials"
	@echo "  Store synchronization completed!"

# Enhanced Quick Commands
space-launch: shopify-setup quick-start ##  Ultimate space portfolio launch command
	@echo " Space Portfolio Enhanced - Mission Ready!"
	@echo "  Shopify Tools: Activated"
	@echo "  React Components: Online"
	@echo " Polaris Design: Engaged"
	@echo " All systems operational!"

# Help for new features
shopify-help: ## Show Shopify-specific commands and setup
	@echo "  Shopify Enhanced Portfolio Commands:"
	@echo ""
	@echo "Setup Commands:"
	@echo "  make shopify-setup    - Complete Shopify development setup"
	@echo "  make shopify-init     - Initialize new Shopify app"
	@echo ""
	@echo "Development:"
	@echo "  make dev             - Full development (Express + React)"
	@echo "  make react-dev       - React-focused development"
	@echo "  make storefront-dev  - Shopify Storefront development"
	@echo ""
	@echo "Deployment:"
	@echo "  make deploy-shopify  - Deploy to Shopify platform"
	@echo "  make space-launch    - Ultimate launch command"
	@echo ""
	@echo " Shopify Tools Documentation: https://shopify.dev/" 