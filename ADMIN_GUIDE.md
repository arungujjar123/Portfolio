# Research Website - Content Management Guide

## Overview

This research website uses **Sanity CMS** as a headless content management system. This allows you to easily manage all website content (profile, publications, courses, research experience, etc.) through an intuitive admin interface.

## Getting Started

### Prerequisites

- Node.js installed
- Access to Sanity Studio (running locally or deployed)

### Starting Sanity Studio

1. Navigate to the Sanity Studio directory:

   ```bash
   cd portfolio-studio
   ```

2. Start the studio:

   ```bash
   npm run dev
   ```

3. Open your browser and go to: `http://localhost:3333`

## Content Types

### 1. Researcher Profile

**Location:** Content menu → Researcher Profile

Manage your personal and professional information:

- **Name**: Your full name
- **Job Title**: Current position (e.g., "Assistant Professor", "Senior Researcher")
- **Profile Image**: Upload a professional photo
- **Office Location**: Your office room/building
- **Department**: Academic department or research unit
- **State/City**: Geographic location
- **Primary Email**: Main contact email
- **Secondary Email**: Alternative contact email
- **Phone Number**: Contact number
- **Website Link**: Personal or institutional website
- **CV Button Text**: Text for CV download button
- **Welcome Section Heading**: Greeting text for the homepage
- **Biography/Introduction**: Brief introduction about yourself
- **Research Areas**: Your main research interests and domains

**Best Practices:**

- Keep the bio concise (2-3 paragraphs)
- List 3-5 specific research areas
- Use high-quality profile images (recommended: 400x400px)

### 2. Publications

**Location:** Content menu → Publications

Add and manage your academic publications:

- **Title**: Publication title
- **Authors**: List of authors
- **Venue**: Conference/Journal name
- **Year**: Publication year
- **PDF Link**: Link to paper PDF
- **DOI**: Digital Object Identifier
- **Abstract**: Brief summary
- **Display Order**: Control the order of appearance

**Tips:**

- Add most recent publications first (use lower order numbers)
- Include complete citation information
- Link to official publication pages when possible

### 3. Research Experience

**Location:** Content menu → Work Experience

Document your research positions and projects:

- **Position Title**: Your role (e.g., "Postdoctoral Researcher")
- **Institution**: University, lab, or organization
- **Start Date**: When you began
- **End Date**: Leave blank if current position
- **Description**: Your responsibilities and achievements
- **Display Order**: Ordering on the page

**Best Practices:**

- List current position first
- Focus on research contributions and impact
- Include funded projects and grants

### 4. Teaching Experience

**Location:** Content menu → Teaching Experience

Track your teaching history:

- **Course Name**: Full course title
- **Course Code**: Institutional course number
- **Institution**: Where you taught
- **Semester/Year**: When the course was offered
- **Role**: Instructor, TA, Lecturer, etc.
- **Description**: Course details and outcomes

### 5. Courses

**Location:** Content menu → Course

Manage current and past courses:

- **Course Name**: Full title
- **Course Code**: Official code
- **Semester**: Select from dropdown (e.g., "spring-2026", "past-list")
- **Credits**: Number of credits
- **Description**: Course overview
- **Syllabus Link**: Link to syllabus PDF
- **Display Order**: Order on course listing

**Semester Options:**

- **spring-2026**: Current semester courses (displayed on home page)
- **past-list**: Previously taught courses

### 6. Awards/Honours

**Location:** Content menu → Awards / Honours

Add recognitions and achievements:

- **Award Title**: Name of award or honor
- **Year**: When received
- **Display Order**: Ordering on page

## Managing Team Members

The Team page can be extended to display research group members. Currently, it's a placeholder that can be customized by:

1. Creating a new schema type in Sanity (`teamMember.js`)
2. Adding fields for name, role, image, bio, etc.
3. Updating the Team.jsx component to fetch and display team data

## Resources Section

The Resources page displays:

- Workshops and talks
- Research tools and simulators
- Tutorial materials
- Code repositories

This page can be managed by:

1. Adding content directly in the Resources.jsx component
2. Or creating a new Sanity schema for dynamic resource management

## Publishing Changes

### Local Development

Changes in Sanity Studio are immediately available to the local development server. Refresh your React app to see updates.

### Production Deployment

1. Ensure Sanity project is deployed:

   ```bash
   cd portfolio-studio
   sanity deploy
   ```

2. Deploy your React frontend to your hosting service (Vercel, Netlify, etc.)

## Common Tasks

### Adding a New Publication

1. Go to Content → Publication
2. Click "Create" button
3. Fill in all required fields (Title, Authors, Venue, Year)
4. Set Display Order (lower numbers appear first)
5. Click "Publish"

### Updating Profile Information

1. Go to Content → Researcher Profile
2. Click on the existing profile document
3. Edit any field
4. Click "Publish" to save changes

### Managing Course Listings

1. Go to Content → Course
2. For current courses: Set Semester to "spring-2026"
3. For past courses: Set Semester to "past-list"
4. Use Display Order to control sequence

### Uploading Images

1. Click on any image field
2. Drag and drop an image or click to browse
3. Adjust hotspot/crop if needed
4. Image is automatically optimized and hosted

## Data Validation

Sanity enforces validation rules:

- ✅ Required fields must be filled
- ✅ Email fields must be valid email addresses
- ✅ Dates must be in correct format
- ✅ Numbers must be integers where specified

## Security

- Sanity Studio access is controlled through your Sanity project settings
- Add team members through Sanity project dashboard
- Configure roles and permissions as needed
- Never share admin credentials publicly

## Troubleshooting

**Q: Changes don't appear on the website?**

- Check that you clicked "Publish" (not just Save as Draft)
- Refresh the frontend application
- Check browser console for API errors

**Q: Images not loading?**

- Verify image is published in Sanity
- Check that CORS is configured in Sanity project
- Ensure image URL is correctly generated

**Q: Can't access Sanity Studio?**

- Verify studio is running (`npm run dev`)
- Check the correct port (default: 3333)
- Clear browser cache and try again

## Best Practices

1. **Regular Updates**: Keep publications and research activities current
2. **Consistent Formatting**: Use consistent citation styles
3. **Quality Images**: Use high-resolution, professional photos
4. **Backup Data**: Sanity automatically backs up data, but export occasionally
5. **Test Changes**: Preview changes before publishing

## Support

For Sanity-specific questions:

- Documentation: https://www.sanity.io/docs
- Community: https://slack.sanity.io/

For website-specific questions, refer to the main README.md file.
