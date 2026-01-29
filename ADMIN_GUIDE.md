# Portfolio Admin System - Setup Guide

## Overview

Your portfolio now includes an **Admin Authentication System** that allows you to edit content when logged in as admin. Regular visitors see the portfolio normally without any edit options.

## Features Added

### 1. Admin Login System

- Secure login page at `/login`
- Admin-only access (not for regular users)
- Login state persists across page refreshes
- Visible login/logout button in navbar

### 2. Editable Content

When logged in as admin, you can:

- ✏️ **Edit** any text field by clicking the "Edit" button
- ➕ **Add** new items (work experience, courses, awards)
- 🗑️ **Delete** existing items
- All changes are **automatically saved** to browser's localStorage

### 3. Regular User View

- No edit buttons visible
- Clean, professional display
- Content is read-only

## How to Use

### Login as Admin

1. Click **"Admin Login"** button in the navbar (top right)
2. Enter credentials:
   - **Username:** `admin`
   - **Password:** `admin123`
3. Click **Login**

### Edit Content

Once logged in:

1. Navigate to any page (e.g., Experience)
2. Hover over any text field to see the **"✏️ Edit"** button
3. Click Edit, modify the text, and click **"✓ Save"**
4. To add new items, click **"+ Add"** buttons
5. To remove items, click **"🗑️ Delete"** buttons

### Logout

Click the **"Logout"** button in the navbar (top right)

## Files Created/Modified

### New Files:

- `src/context/AuthContext.jsx` - Manages authentication state
- `src/pages/Login.jsx` - Admin login page
- `src/pages/Login.css` - Login page styles
- `src/components/EditableField.jsx` - Reusable edit component
- `src/components/EditableField.css` - Edit component styles

### Modified Files:

- `src/App.jsx` - Added AuthProvider and Login route
- `src/components/Navbar.jsx` - Added admin controls
- `src/components/Navbar.css` - Styled admin controls
- `src/pages/Experience.jsx` - Added edit functionality
- `src/pages/Experience.css` - Added admin control styles

## Data Storage

Content is saved in browser's **localStorage**:

- `workExperience` - Work experience data
- `teachingExperience` - Teaching courses data
- `awards` - Awards and honors data
- `isAdmin` - Admin login status

## Extending to Other Pages

To add edit functionality to other pages (Home, Courses, Publications):

1. Import required hooks:

```javascript
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import EditableField from "../components/EditableField";
```

2. Get admin status:

```javascript
const { isAdmin } = useAuth();
```

3. Convert static data to state with localStorage:

```javascript
const [data, setData] = useState(() => {
  const saved = localStorage.getItem("dataKey");
  return saved ? JSON.parse(saved) : defaultData;
});
```

4. Wrap content in EditableField:

```javascript
{
  isAdmin ? (
    <EditableField
      value={item.field}
      onSave={(value) => updateFunction(item.id, "field", value)}
    />
  ) : (
    item.field
  );
}
```

## Security Notes

⚠️ **Important**: This is a client-side demo implementation suitable for:

- Personal portfolios
- Demo projects
- Local development

For production use with real security needs:

- Implement backend authentication (JWT, OAuth)
- Store data in a database (MongoDB, PostgreSQL)
- Use environment variables for credentials
- Add HTTPS and CORS protection

## Changing Admin Credentials

To change the default admin credentials, edit `src/context/AuthContext.jsx`:

```javascript
const ADMIN_CREDENTIALS = {
  username: "your-username",
  password: "your-secure-password",
};
```

## Troubleshooting

**Q: Changes don't persist after closing browser?**
A: Make sure browser localStorage is enabled

**Q: Can't see edit buttons?**
A: Ensure you're logged in as admin

**Q: Want to reset all data?**
A: Open browser console and run:

```javascript
localStorage.clear();
location.reload();
```

## Next Steps

You can now:

1. Start the development server: `npm run dev`
2. Visit `http://localhost:5173/login`
3. Login with admin credentials
4. Start editing your portfolio content!

## Future Enhancements

Consider adding:

- Image upload functionality
- Rich text editor for descriptions
- Export/Import data feature
- Multiple admin users
- Backend API integration
- Role-based permissions
