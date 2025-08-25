#!/bin/bash

# 🧪 Script de Verificación Post-Deploy para Red Medicron IPS

echo "🚀 Iniciando verificación post-deploy..."
echo "=================================="

# Variables de configuración
SITE_URL="https://tu-sitio.com"  # ⚠️ CAMBIAR POR TU URL DE PRODUCCIÓN
GOOGLE_APPS_SCRIPT_URL="TU_GOOGLE_APPS_SCRIPT_URL"  # ⚠️ CAMBIAR POR TU URL

echo "📋 Verificando configuración..."
echo "Sitio: $SITE_URL"
echo "Google Apps Script: $GOOGLE_APPS_SCRIPT_URL"
echo ""

# 1. Verificar que el sitio está online
echo "🌐 1. Verificando disponibilidad del sitio..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")
if [ "$HTTP_STATUS" -eq 200 ]; then
    echo "✅ Sitio disponible (HTTP $HTTP_STATUS)"
else
    echo "❌ Sitio no disponible (HTTP $HTTP_STATUS)"
    exit 1
fi

# 2. Verificar headers de seguridad
echo ""
echo "🔒 2. Verificando headers de seguridad..."
HEADERS=$(curl -s -I "$SITE_URL")

if echo "$HEADERS" | grep -q "Content-Security-Policy"; then
    echo "✅ Content-Security-Policy presente"
else
    echo "⚠️ Content-Security-Policy no encontrada"
fi

if echo "$HEADERS" | grep -q "X-Frame-Options"; then
    echo "✅ X-Frame-Options presente"
else
    echo "⚠️ X-Frame-Options no encontrada"
fi

# 3. Verificar Google Apps Script
echo ""
echo "📡 3. Verificando Google Apps Script..."
if [ ! -z "$GOOGLE_APPS_SCRIPT_URL" ] && [ "$GOOGLE_APPS_SCRIPT_URL" != "TU_GOOGLE_APPS_SCRIPT_URL" ]; then
    GAS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$GOOGLE_APPS_SCRIPT_URL")
    if [ "$GAS_STATUS" -eq 200 ]; then
        echo "✅ Google Apps Script disponible (HTTP $GAS_STATUS)"
    else
        echo "❌ Google Apps Script no disponible (HTTP $GAS_STATUS)"
    fi
else
    echo "⚠️ URL de Google Apps Script no configurada"
fi

# 4. Verificar CSP específica para Google
echo ""
echo "🔍 4. Verificando CSP para Google Apps Script..."
CSP_HEADER=$(curl -s -I "$SITE_URL" | grep -i "content-security-policy" | head -1)

if echo "$CSP_HEADER" | grep -q "script.google.com"; then
    echo "✅ CSP permite script.google.com"
else
    echo "❌ CSP NO permite script.google.com"
fi

if echo "$CSP_HEADER" | grep -q "script.googleusercontent.com"; then
    echo "✅ CSP permite script.googleusercontent.com"
else
    echo "❌ CSP NO permite script.googleusercontent.com"
fi

echo ""
echo "=================================="
echo "🎯 Verificación completada"
echo ""
echo "📝 Próximos pasos:"
echo "1. Visita $SITE_URL/contacto"
echo "2. Llena y envía el formulario"
echo "3. Verifica la consola del navegador (F12)"
echo "4. Confirma que los datos llegan a Google Sheets"
echo "5. Verifica el email de notificación"
echo ""
echo "🚨 Si hay errores:"
echo "- Revisa la configuración CSP en index.html"
echo "- Verifica que la URL de Google Apps Script sea correcta"
echo "- Considera usar CSP más permisiva temporalmente"
echo ""
echo "📞 ¿Necesitas ayuda? Comparte:"
echo "- URL del sitio en producción"
echo "- Tipo de hosting (Netlify, Vercel, etc.)"
echo "- Error exacto de la consola del navegador"
