require('dotenv').config()
const express = require('express')
const path = require('path')
const session = require('express-session')
const expressLayouts = require('express-ejs-layouts')

const dashboardRoutes = require('./routes/dashboard.routes')
//const authRoutes = require('./routes/auth.routes')
//const cajaRoutes = require('./routes/caja.routes')
//const bancosRoutes = require('./routes/bancos.routes')

const app = express()

// =======================
// Middlewares básicos
// =======================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// =======================
// Sesiones
// =======================
app.use(session({
  secret: 'saas-caja-secret',
  resave: false,
  saveUninitialized: false
}))

// =======================
// View engine + Layout
// =======================
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressLayouts)
app.set('layout', 'layout')

// =======================
// Rutas
// =======================
app.use('/', dashboardRoutes)       // /
//app.use('/auth', authRoutes)        // /auth/login
//app.use('/caja', cajaRoutes)        // /caja
//app.use('/bancos', bancosRoutes)    // /bancos

// =======================
app.listen(3000, () => {
  console.log('🚀 http://localhost:3000')
})
