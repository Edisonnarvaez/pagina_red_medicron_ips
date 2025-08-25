# Script de Optimización de Imágenes para Red Medicron IPS
# Requiere ImageMagick: https://imagemagick.org/script/download.php#windows

Write-Host "🖼️ Iniciando optimización de imágenes..." -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Cyan

$projectDir = "D:\Red Medicron IPS\pagina_web_RM"
$publicDir = "$projectDir\public"
$backupDir = "$projectDir\backup-images-$(Get-Date -Format 'yyyyMMdd-HHmm')"

# Crear backup de imágenes originales
Write-Host "📦 Creando backup de imágenes originales..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null
Copy-Item -Path "$publicDir\images" -Destination "$backupDir\images" -Recurse -Force
Copy-Item -Path "$publicDir\sedes" -Destination "$backupDir\sedes" -Recurse -Force
Copy-Item -Path "$publicDir\*.png" -Destination $backupDir -Force
Write-Host "✅ Backup creado en: $backupDir" -ForegroundColor Green

# Función para verificar si ImageMagick está instalado
function Test-ImageMagick {
    try {
        $null = magick -version
        return $true
    }
    catch {
        return $false
    }
}

if (-not (Test-ImageMagick)) {
    Write-Host "❌ ImageMagick no está instalado." -ForegroundColor Red
    Write-Host "📥 Descárgalo de: https://imagemagick.org/script/download.php#windows" -ForegroundColor Yellow
    Write-Host "💡 Alternativamente, usa las herramientas online recomendadas en OPTIMIZACION_IMAGENES.md" -ForegroundColor Cyan
    exit
}

# Optimizar imágenes críticas
Write-Host "🎯 Optimizando imágenes críticas..." -ForegroundColor Yellow

# ipiales.jpg (2.7 MB → ~100 KB)
$ipiales = "$publicDir\sedes\ipiales.jpg"
if (Test-Path $ipiales) {
    Write-Host "📸 Optimizando ipiales.jpg..." -ForegroundColor White
    magick $ipiales -resize "1200x800>" -quality 80 -strip $ipiales
    $newSize = [math]::Round((Get-Item $ipiales).Length / 1KB, 2)
    Write-Host "✅ ipiales.jpg optimizado - Nuevo tamaño: $newSize KB" -ForegroundColor Green
}

# la_cruz.png (1.1 MB → ~80 KB)
$laCruz = "$publicDir\sedes\la_cruz.png"
if (Test-Path $laCruz) {
    Write-Host "📸 Optimizando la_cruz.png..." -ForegroundColor White
    magick $laCruz -resize "800x600>" -quality 85 -strip $laCruz
    $newSize = [math]::Round((Get-Item $laCruz).Length / 1KB, 2)
    Write-Host "✅ la_cruz.png optimizado - Nuevo tamaño: $newSize KB" -ForegroundColor Green
}

# Buesaco.png (782 KB → ~80 KB)
$buesaco = "$publicDir\sedes\Buesaco.png"
if (Test-Path $buesaco) {
    Write-Host "📸 Optimizando Buesaco.png..." -ForegroundColor White
    magick $buesaco -resize "800x600>" -quality 85 -strip $buesaco
    $newSize = [math]::Round((Get-Item $buesaco).Length / 1KB, 2)
    Write-Host "✅ Buesaco.png optimizado - Nuevo tamaño: $newSize KB" -ForegroundColor Green
}

# Optimizar imágenes moderadas
Write-Host "🎨 Optimizando imágenes moderadas..." -ForegroundColor Yellow

$moderateImages = @(
    "$publicDir\sedes\Fatima.jpeg",
    "$publicDir\images\imgPortafolioiz.jpg",
    "$publicDir\images\portafolio.jpg"
)

foreach ($image in $moderateImages) {
    if (Test-Path $image) {
        $fileName = Split-Path $image -Leaf
        Write-Host "📸 Optimizando $fileName..." -ForegroundColor White
        magick $image -resize "1200x800>" -quality 85 -strip $image
        $newSize = [math]::Round((Get-Item $image).Length / 1KB, 2)
        Write-Host "✅ $fileName optimizado - Nuevo tamaño: $newSize KB" -ForegroundColor Green
    }
}

# Crear versiones WebP
Write-Host "🚀 Creando versiones WebP..." -ForegroundColor Yellow

$imagesToWebP = Get-ChildItem "$publicDir\images" -Include "*.jpg","*.jpeg" -Recurse
foreach ($image in $imagesToWebP) {
    $webpPath = $image.FullName -replace '\.(jpg|jpeg)$', '.webp'
    Write-Host "🔄 Convirtiendo $($image.Name) a WebP..." -ForegroundColor White
    magick $image.FullName -quality 85 $webpPath
    Write-Host "✅ Creado: $($image.BaseName).webp" -ForegroundColor Green
}

# Mostrar resumen final
Write-Host "📊 Generando reporte final..." -ForegroundColor Yellow

$totalSizeBefore = 0
$totalSizeAfter = 0

Get-ChildItem "$backupDir" -Recurse -Include "*.jpg","*.jpeg","*.png" | ForEach-Object {
    $totalSizeBefore += $_.Length
}

Get-ChildItem "$publicDir" -Recurse -Include "*.jpg","*.jpeg","*.png" | ForEach-Object {
    $totalSizeAfter += $_.Length
}

$sizeBefore = [math]::Round($totalSizeBefore / 1MB, 2)
$sizeAfter = [math]::Round($totalSizeAfter / 1MB, 2)
$savings = [math]::Round((($totalSizeBefore - $totalSizeAfter) / $totalSizeBefore) * 100, 1)

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "🎉 OPTIMIZACIÓN COMPLETADA" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "📏 Tamaño antes: $sizeBefore MB" -ForegroundColor White
Write-Host "📏 Tamaño después: $sizeAfter MB" -ForegroundColor White
Write-Host "💾 Ahorro: $savings%" -ForegroundColor Green
Write-Host "📦 Backup guardado en: $backupDir" -ForegroundColor Yellow
Write-Host "🔄 Versiones WebP creadas para mejor rendimiento" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

Write-Host "🚀 ¡Listo! Tu sitio web ahora cargará mucho más rápido." -ForegroundColor Green
