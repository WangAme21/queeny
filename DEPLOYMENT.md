# Render Deployment Guide

## Quick Deploy to Render

### Option 1: Using render.yaml (Recommended)
1. Push your code to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com)
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file
6. Click "Apply" to deploy

### Option 2: Manual Setup
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: panyang-bakery
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Database Setup
1. In Render Dashboard, click "New +" → "PostgreSQL" (or MySQL)
2. Configure:
   - **Name**: panyang-db
   - **Database**: queeny
   - **User**: panyang_user
   - **Plan**: Free
3. Copy the database credentials
4. Add them as environment variables in your web service

### Environment Variables
Add these in your Render web service settings:
- `NODE_ENV`: production
- `DB_HOST`: (from database service)
- `DB_USER`: (from database service)
- `DB_PASSWORD`: (from database service)
- `DB_NAME`: queeny
- `DB_PORT`: (from database service)

### Database Schema
Run this SQL in your Render database:
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    birthdate DATE,
    gender VARCHAR(10),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Benefits of Render over Vercel
- ✅ Persistent servers (no cold starts)
- ✅ Built-in database hosting
- ✅ Better for MySQL/PostgreSQL
- ✅ No function timeout limits
- ✅ Free tier available
- ✅ Automatic SSL certificates
