Gatsby Portfolio & Digital Ocean Migration Plan

Phase 1: Gatsby Setup
1. ~~Create new Git repository for the Gatsby project~~
2. ~~Install Gatsby CLI and initialize new project (npm install -g gatsby-cli && gatsby new portfolio-gatsby)~~
3. ~~Learn basic Gatsby structure and GraphQL queries~~
4. ~~Push intialized project to github~~

Phase 2: Content Migration
1. ~~Create Markdown files for portfolio content (projects, skills, experience)~~
2. ~~Set up Gatsby plugins for Markdown processing~~
3. ~~Set up empty components as placeholders~~
4. ~~Set up general styling & background~~
5. ~~Establish a style guide (fonts, font sizes, spacing, colors, etc so that as I add content it all looks consistent)~~
6. ~~Migrate full components from current portfolio to Gatsby~~

Phase 3: New Content
1. Add additional projects (Progrexion work, drive sunny, others?)
2. Remove bad project (SSS?)
3. ~~Build an about me section~~
4. ~~Build an experience section (like a resume)~~
5. ~~Build a resume capability; in the upcoming experience section, an onclick opens up a modal (like a PDF if possible) of my resume! I also want to be able download this as a PDF anytime I want~~


Honorary Phase 3.5:
1. Ensure consistency across app. Same patterns. No REM/EM units. Only HSL color codes. Fonts, border radiuses, colors, etc.

Phase 4: Server & Domain Setup
1. Purchase domain name from registrar (Namecheap, Google Domains, etc.)
2. Create Digital Ocean account and set up a basic droplet ($5-10/month)
3. Set up SSH keys for secure access to your droplet
4. Install necessary software on droplet (Node.js, Nginx)

Phase 5: Deployment
1. Configure Nginx to serve your Gatsby site
2. Set up Let's Encrypt for free SSL certificates
3. Point domain to your Digital Ocean droplet via DNS settings
4. Deploy Gatsby build to your server
5. Set up a deployment workflow (manual or automated)

Phase 6: Maintenance
1. Set up monitoring for your droplet (DO provides basic monitoring)
2. Create backup strategy for your site
3. Document your setup process for future reference