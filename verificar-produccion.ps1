# 🧪 Script de Verificación Post-Deploy para Red Medicron IPS (Windows PowerShell)

Write-Host "🚀 Iniciando verificación post-deploy..." -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan

# Variables de configuración
$SITE_URL = "https://tu-sitio.com"  # ⚠️ CAMBIAR POR TU URL DE PRODUCCIÓN
$GOOGLE_APPS_SCRIPT_URL = "TU_GOOGLE_APPS_SCRIPT_URL"  # ⚠️ CAMBIAR POR TU URL

Write-Host "📋 Verificando configuración..." -ForegroundColor Yellow
Write-Host "Sitio: $SITE_URL"
Write-Host "Google Apps Script: $GOOGLE_APPS_SCRIPT_URL"
Write-Host ""

# 1. Verificar que el sitio está online
Write-Host "🌐 1. Verificando disponibilidad del sitio..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $SITE_URL -Method Head -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Sitio disponible (HTTP $($response.StatusCode))" -ForegroundColor Green
    } else {
        Write-Host "❌ Sitio no disponible (HTTP $($response.StatusCode))" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "❌ Error al conectar con el sitio: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# 2. Verificar headers de seguridad
Write-Host ""
Write-Host "🔒 2. Verificando headers de seguridad..." -ForegroundColor Yellow
try {
    $headers = Invoke-WebRequest -Uri $SITE_URL -Method Head -TimeoutSec 10
    
    if ($headers.Headers.ContainsKey("Content-Security-Policy")) {
        Write-Host "✅ Content-Security-Policy presente" -ForegroundColor Green
        $csp = $headers.Headers["Content-Security-Policy"]
        
        if ($csp -like "*script.google.com*") {
            Write-Host "✅ CSP permite script.google.com" -ForegroundColor Green
        } else {
            Write-Host "❌ CSP NO permite script.google.com" -ForegroundColor Red
        }
        
        if ($csp -like "*script.googleusercontent.com*") {
            Write-Host "✅ CSP permite script.googleusercontent.com" -ForegroundColor Green
        } else {
            Write-Host "❌ CSP NO permite script.googleusercontent.com" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠️ Content-Security-Policy no encontrada" -ForegroundColor Yellow
    }
    
    if ($headers.Headers.ContainsKey("X-Frame-Options")) {
        Write-Host "✅ X-Frame-Options presente" -ForegroundColor Green
    } else {
        Write-Host "⚠️ X-Frame-Options no encontrada" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️ Error al verificar headers: $($_.Exception.Message)" -ForegroundColor Yellow
}

# 3. Verificar Google Apps Script
Write-Host ""
Write-Host "📡 3. Verificando Google Apps Script..." -ForegroundColor Yellow
if ($GOOGLE_APPS_SCRIPT_URL -ne "TU_GOOGLE_APPS_SCRIPT_URL" -and $GOOGLE_APPS_SCRIPT_URL -ne "") {
    try {
        $gasResponse = Invoke-WebRequest -Uri $GOOGLE_APPS_SCRIPT_URL -Method Get -TimeoutSec 10
        if ($gasResponse.StatusCode -eq 200) {
            Write-Host "✅ Google Apps Script disponible (HTTP $($gasResponse.StatusCode))" -ForegroundColor Green
        } else {
            Write-Host "❌ Google Apps Script no disponible (HTTP $($gasResponse.StatusCode))" -ForegroundColor Red
        }
    } catch {
        Write-Host "❌ Error al conectar con Google Apps Script: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "⚠️ URL de Google Apps Script no configurada" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "🎯 Verificación completada" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Próximos pasos:" -ForegroundColor Yellow
Write-Host "1. Visita $SITE_URL/contacto"
Write-Host "2. Llena y envía el formulario"
Write-Host "3. Verifica la consola del navegador (F12)"
Write-Host "4. Confirma que los datos llegan a Google Sheets"
Write-Host "5. Verifica el email de notificación"
Write-Host ""
Write-Host "🚨 Si hay errores:" -ForegroundColor Red
Write-Host "- Revisa la configuración CSP en index.html"
Write-Host "- Verifica que la URL de Google Apps Script sea correcta"
Write-Host "- Considera usar CSP más permisiva temporalmente"
Write-Host ""
Write-Host "📞 ¿Necesitas ayuda? Comparte:" -ForegroundColor Cyan
Write-Host "- URL del sitio en producción"
Write-Host "- Tipo de hosting (Netlify, Vercel, etc.)"
Write-Host "- Error exacto de la consola del navegador"
