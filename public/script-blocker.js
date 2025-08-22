// Archivo para prevenir la carga de scripts jQuery no deseados
// Este archivo debe cargarse antes que cualquier otro script

(function() {
    'use strict';
    
    // Lista de scripts problemáticos conocidos
    const blockedScripts = [
        'jquery',
        'simple-expand',
        'code.jquery.com'
    ];
    
    // Función para bloquear scripts no deseados
    function blockUnwantedScripts() {
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
            const src = script.src.toLowerCase();
            if (blockedScripts.some(blocked => src.includes(blocked))) {
                console.warn('Script bloqueado:', script.src);
                script.remove();
            }
        });
    }
    
    // Observer para detectar scripts dinámicos
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.tagName === 'SCRIPT' && node.src) {
                    const src = node.src.toLowerCase();
                    if (blockedScripts.some(blocked => src.includes(blocked))) {
                        console.warn('Script dinámico bloqueado:', node.src);
                        node.remove();
                    }
                }
            });
        });
    });
    
    // Iniciar observación
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
    
    // Ejecutar inmediatamente
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', blockUnwantedScripts);
    } else {
        blockUnwantedScripts();
    }
    
    // Crear jQuery dummy mejorado
    if (typeof window.jQuery === 'undefined' && typeof window.$ === 'undefined') {
        const jqueryDummy = function(selector) {
            console.warn('jQuery bloqueado - Esta es una aplicación React pura');
            return {
                ready: function(fn) { 
                    if (typeof fn === 'function') {
                        if (document.readyState === 'loading') {
                            document.addEventListener('DOMContentLoaded', fn);
                        } else {
                            fn();
                        }
                    }
                    return this;
                },
                on: function() { return this; },
                off: function() { return this; },
                click: function() { return this; },
                each: function() { return this; },
                css: function() { return this; },
                html: function() { return this; },
                text: function() { return this; },
                val: function() { return this; },
                attr: function() { return this; },
                prop: function() { return this; },
                addClass: function() { return this; },
                removeClass: function() { return this; },
                hide: function() { return this; },
                show: function() { return this; },
                fadeIn: function() { return this; },
                fadeOut: function() { return this; },
                animate: function() { return this; },
                find: function() { return this; },
                parent: function() { return this; },
                children: function() { return this; },
                append: function() { return this; },
                prepend: function() { return this; },
                remove: function() { return this; },
                length: 0
            };
        };
        
        // Propiedades adicionales de jQuery
        jqueryDummy.fn = jqueryDummy.prototype = jqueryDummy();
        jqueryDummy.noConflict = function() { return jqueryDummy; };
        jqueryDummy.extend = function() { return {}; };
        
        window.$ = window.jQuery = jqueryDummy;
    }
})();
