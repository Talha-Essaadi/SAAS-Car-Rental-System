
## Steps :
1. choose a architecture : YES
2. Create Architecture folders : YES
3. Create Wireframe in figma : pindding 
4. collect landing pages for inspiration 

## Landing pages :
- Header
- Hero Section
- FAQ
- Footer

- **Table :**

| #  | Section Name               | Purpose                                                                    |
| -- | -------------------------- | -------------------------------------------------------------------------- |
| 1  | **Header / Navbar**        | Navigation + brand awareness — often sticky at the top                     |
| 2  | **Hero Section**           | The first thing users see — includes a strong value proposition & CTA      |
| 3  | **Features / Benefits**    | Explain what your product does and how it helps                            |
| 4  | **How It Works**           | Step-by-step guide or workflow demo (optional)                             |
| 5  | **Screenshots / Demo**     | Show off the product UI, features, or animations                           |
| 6  | **Social Proof**           | Logos of clients, press mentions, or user counts (e.g., “Trusted by 10K+”) |
| 7  | **Testimonials / Reviews** | Build trust with real feedback from happy users                            |
| 8  | **Pricing / Plans**        | Show pricing tiers or encourage joining the waitlist (can be a teaser)     |
| 9  | **Call to Action (CTA)**   | Standalone section with a big “Sign Up” / “Get Started” button             |
| 10 | **FAQ**                    | Handle objections, explain doubts, and reduce friction                     |
| 11 | **Newsletter / Waitlist**  | Capture emails if the SaaS isn’t live yet (great for launch)               |
| 12 | **Footer**                 | Legal, links, social icons, contact info, privacy, etc.                    |

## Colors : 
```sh
Primary-color : #081640
test-Primary-color : #000344  <<<<<
Secondary-color : #F05628

Background-color : #E9EFF9
```

## Structure 
- ***Modular Front-End Architecture**
```sh
my-saas-app/
│
├── index.html                # Landing/Home page
├── pricing.html              # Pricing page
├── login.html                # Login page
├── signup.html               # Signup/Register page
├── dashboard.html            # After login user dashboard
│
├── /assets/                  # All static assets (images, fonts, icons)
│   ├── /images/
│   ├── /icons/
│   └── /fonts/
│
├── /styles/                  # CSS files
│   ├── main.css              # Global styles
│   ├── variables.css         # Color palette, fonts, spacing
│   ├── components.css        # Reusable component styles
│   └── pages/                # Page-specific styles
│       ├── home.css
│       ├── login.css
│       └── dashboard.css
│
├── /scripts/                 # JavaScript files
│   ├── main.js               # Global JS logic
│   ├── auth.js               # Login/Signup logic
│   ├── api.js                # API calls and helper functions
│   └── dashboard.js          # Logic for user dashboard
│
├── /components/             # HTML reusable components (optional if using JS includes)
│   ├── navbar.html
│   └── footer.html
│
└── /docs/                    # Documentation, README, changelogs, etc.
    └── README.md

```