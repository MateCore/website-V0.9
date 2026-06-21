# 📋 Todo List App - Local Storage

A beautiful, fully functional todo list application with local storage persistence, built with vanilla JavaScript, HTML5, and CSS3.

## ✨ Features

### Core Features
- ✅ **Add Tasks** - Easily add new tasks with validation
- ✅ **Mark Complete** - Check off completed tasks
- ✅ **Delete Tasks** - Remove individual tasks
- ✅ **Filter Tasks** - View All, Active, or Completed tasks
- ✅ **Local Storage** - All data persists automatically
- ✅ **Clear Completed** - Remove all completed tasks at once
- ✅ **Reset All** - Clear all tasks (with confirmation)
- ✅ **Live Stats** - See total, completed, and remaining tasks
- ✅ **Empty State** - Beautiful message when no tasks exist
- ✅ **Notifications** - User feedback for actions

### Design Features
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ⚡ **Smooth Animations** - Fade-in, slide effects on interactions
- 🎯 **User-Friendly** - Intuitive controls and clear feedback
- 🌈 **Professional Color Scheme** - Purple gradient theme
- ♿ **Accessible** - Semantic HTML and keyboard support

## 🚀 How to Use

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MateCore/website-V0.9.git
   cd website-V0.9/todo-app
   ```

2. **Open in Browser**
   - Double-click `index.html` to open
   - Or use Live Server in VS Code
   - Or run a local server: `python -m http.server`

### Online Access

Access the app at: `https://matecore.github.io/website-V0.9/todo-app/` (after enabling GitHub Pages)

## 📝 How It Works

### Adding Tasks
1. Type your task in the input field
2. Click "Add" or press Enter
3. Task appears at the top of the list
4. Minimum 3 characters required

### Managing Tasks
- **Check/Uncheck** - Click the checkbox to toggle completion
- **Delete** - Click the delete button to remove a task
- **Filter** - Use the filter buttons to view specific tasks

### Clearing Tasks
- **Clear Completed** - Removes all completed tasks
- **Reset All** - Deletes everything (shows confirmation)

## 💾 Local Storage

All tasks are automatically saved to browser's local storage. This means:
- ✅ Tasks persist across browser sessions
- ✅ Data survives page refresh
- ✅ Each browser has separate data
- ✅ Clearing browser cache will delete tasks

## 📊 Statistics

The app displays real-time statistics:
- **Total Tasks** - Number of all tasks
- **Completed** - Number of finished tasks
- **Remaining** - Number of active tasks

## 🎯 Filters

- **All** - Show all tasks
- **Active** - Show only incomplete tasks
- **Completed** - Show only finished tasks

## 📱 Responsive Design

### Desktop (1024px+)
- Full layout with side-by-side elements
- Large buttons and inputs

### Tablet (768px - 1023px)
- Adjusted spacing and sizing
- Stacked layout for smaller elements

### Mobile (480px and below)
- Single column layout
- Touch-friendly buttons and inputs
- Full-width controls

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks or libraries
- **Local Storage API** - Data persistence
- **Font Awesome Icons** - Beautiful icons
- **Google Fonts** - Poppins typeface

### File Structure
```
todo-app/
├── index.html      # Main HTML structure
├── style.css       # All styling and responsive design
├── script.js       # JavaScript logic and local storage
└── README.md       # This file
```

### Key Code Features
- **OOP Design** - TodoApp class for organized code
- **Error Handling** - Validation for inputs
- **Data Persistence** - Robust local storage integration
- **DOM Manipulation** - Efficient element rendering
- **Event Delegation** - Clean event handling
- **HTML Escaping** - Security against XSS attacks

## 🎨 Customization

### Change Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #667eea;      /* Main color */
    --secondary-color: #764ba2;    /* Gradient color */
    --success-color: #48bb78;      /* Success color */
    --danger-color: #f56565;       /* Delete color */
    --warning-color: #ed8936;      /* Warning color */
    /* ... more colors ... */
}
```

### Change Font
Edit the @import in `style.css` and replace with another Google Font.

### Modify Validation
Edit the `addTodo()` method in `script.js` to change:
- Minimum character length
- Maximum character length
- Custom validation rules

## 🐛 Known Limitations

- Data is stored per browser (not synced across devices)
- Maximum storage depends on browser (usually 5-10MB)
- Private/Incognito mode may not persist data
- No cloud backup (local only)

## 🚀 Future Enhancements

Possible improvements:
- ☐ Due dates for tasks
- ☐ Priority levels
- ☐ Task categories/tags
- ☐ Cloud sync with Firebase
- ☐ Dark/Light mode toggle
- ☐ Task editing
- ☐ Drag and drop reordering
- ☐ Recurring tasks
- ☐ Time estimates
- ☐ Export/Import functionality

## 📄 License

Feel free to use this project for personal or commercial use!

---

**Made with ❤️ by Todo App**

Enjoy staying productive! 🚀