/*
    Spanish translation based on cor-RU - a russian localization mod for corru.observer;
    see and https://github.com/Solrac2009/corru-translation-ES https://github.com/cor-RU/cor-RU for more info

    > localization/entity-menu.js
    almost all the fun stuff like entity names and descriptions is kept here!
    this is both for the entity menu and for easy storage of everything
*/


getLocalizationForPage(true); // --- we call it so often because we really REALLY need to make sure that all the definitions are READY for this part. if we dont do this sometimes it just crumbles for no reason. shrug

cor_ru.entity_menu = {
    // --- rrly proud of this shit i feel so smart
    // do it not like you would in env.localization
    /*
    "original entity name": {
        name: `localized name`,
        desc: `localized exm description`
    },
    you can reference it in other parts of the code later so that all stays consistent
    do not forget about <br>'s!!!!!!!!!!!!!!!!!!!!!! place <br>'s !!!!!!!!!!!!!!!!!!!!*/


    // === localhost
    "funfriend": {
        name: `funfriend`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGNIO EXPLÍCITO::'GESTIÓN DEL SISTEMA';'ASISTIR'`
    },

    // === their city
    "glimmering spires mark their cities": {
        name: `espiras resplandescientes marcan sus ciudades`,
        desc: `::IDEOFORMA OPINATIVA<br>::CONTENIDO::'<br><span>espiras resplandescientes marcan sus ciudades</span><br><span>hechas todas de metal inerte y cristal</span><br><span>такие высокие¡¡¡tan altas!!! ¡mas que cualquier <span class="code">veilk</span>!</span><br><span>pero son tan silenciosas...</span><br><span>algún día respirarán</span><br><span>y nuestros primos claros compartirán nuestros conocimientos</span>'`
    },
    "these grand icons of their control": {
        name: `estos magníficos iconos de su control`,
        desc: `::IDEOFORMA OPINATIVA<br>::CONTENIDO::'<br><span>estos magníficos iconos de su control</span><br><span>pese a que no sean nuestros</span><br><span>siento un extraño orgullo</span><br><span>como nuestros brillantes primos han conquistado su <span class="code">superficie</span>!</span>'`
    },
    "they watch": {
        name: `observan`,
        desc: `::IDEOFORMA ESPACIAL<br>::DESIGNIO EXPLÍCITO::'recuerdo'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'poca separación'">::INCOHERENCIA DETECTADA</span><br>::CONTEXTO HEREDADO::<span style='color: var(--obesk-color)'>'siempre escécticos'</span>`
    },

    // === city surface
    "cashier": {
        name: `cajer@`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGNIO EXPLÍCITO::'recuerdo'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'perfil visual deteriorado'">::INCOHERENCIA DETECTADA</span>`,
    },
    "envoy": {
        name: `enviado`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGNIO EXPLÍCITO::'recuerdo'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'perfil visual deteriorado'">::INCOHERENCIA DETECTADA</span>`
    },
    "menu": {
        name: `menú`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGNIO EXPLÍCITO::'recuerdo';'elemento recurrente'`
    },
    "cloaked streetwalker": {
        name: `andacalles encapotado`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGIO EXPLÍCITO::'recuerdo'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'perfil visual deteriorado'">::INCOHERENCIA DETECTADA</span>`
    },
    "the room high up": {
        name: `la sala de arriba`,
        desc: `::IDEOFORMA EXPERIENCIAL<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'fuentes mnemónicas contradictorias'">::INCOHERENCIA DETECTADA</span>`
    },

    // === the void
    "our dull vessel": {
        name: `nuestra pálida nave`,
        desc: `::IDEOFORMA ESPACIAL<br>::DESIGNIO EXPLÍCITO::'recuerdo';'ubicación recurrente';'alterar estado ideoformal'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'algunos elementos sufren de cohesión extremadamente baja'">::INCOHERENCIA DETECTADA</span>`
    },
    "gate::the dull contrivance": {
        name: `portal::el artificio pálido`,
        desc: `::IDEOFORMA CONECTIVA<br>::DESTINO::ERROR::'entidad no procesable'::NO RENDERIZABLE<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'el destino excede el límite de incoherencia';'se recomienda la reparación'">::INCOHERENCIA PROHIBITIVA</span>`
    },

    // === our dull vessel
    "pilot cyst": {
        name: `quiste piloto`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGNIO EXPLÍCITO::'recuerdo'<br><span style="color: var(--obesk-color)" definition="AVISO::'entidad mayormente inprocesable';'puede ser inexacta'">::INCOHERENCIA DETECTADA</span><br>::CONTEXTO HEREDADO::<span style='color: var(--obesk-color)'>'la gran mente de mi nave'</span>`
    },
    "glazika": {
        name: `glazika`,
        desc: `::IDEOFORMA REACTIVA<br>::DESIGNIO EXPLÍCITO::'recuerdo'`
    },
    "container": {
        name: `recipiente`,
        desc: `::IDEOFORMA NO REACTIVA<br>::DESIGNIO EXPLÍCITO::'elemento recurrente'<br>::CONTEXTO HEREDADO::<span style='color: var(--obesk-color)'>'metales procesados, fácilmente accesibles'</span>`
    },

    // === their waters
    "gate::the depths": {
        name: `portal::profundidades`,
        desc: `::IDEOFORMA CONECTIVA<br>::DESTINO::'ideoespacio de poca dimensión';'interno'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'fallo parcial de cohesión'">::INCOHERENCIA DETECTADA</span><br>::CONTEXTO HEREDADO::<span style='color: var(--obesk-color)'>'que haces aquí'</span>`
    },
    "their vessel": {
        name: `su nave`,
        desc: `::IDEOFORMA ESPACIAL<br>::DE POCA DIMENSIÓN<br>::DESIGNIO EXPLÍCITO::'recuerdo'<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'múltiples entidades con poca cohesión'">::INCOHERENCIA DETECTADA</span><br>::CONTEXTO HEREDADO::<span style='color: var(--obesk-color)'>'naves inertes se encontraban al lado de nuestra <span class="code">espira</span>';'nuestros primos tardaron poco en encontrarnos'</span>`
    },
    "stilted shore": {
        name: `orilla alzada`,
        desc: `::IDEOFORMA NO REACTIVA<br>::DESIGNIO EXPLÍCITO::'recuerdo';'simbólico'<br>::CONTEXTO HEREDADO::<span style='color: var(--obesk-color)'>'el escenario de nuestra obra ${processDefinitionsInString("triocular")} nociones'</span>`
    },
    "the embassy": {
        name: `la embajada`,
        desc: `::IDEOFORMA ESPACIAL<br>ERROR::'entidad no procesable'::NO RENDERIZABLE<br><span style="color: var(--obesk-color)" definition="ANÁLISIS::'el destino excede el límite de incoherencia';'se recomienda la reparación'">::INCOHERENCIA PROHIBITIVA</span>`
    },

    // === their vessel
    "the funny little room": {
        name: `la habitación pequeñita`,
        desc: `::IDEOFORMA EXPERIENCIAL`
    },
}

cor_ru.getEntityMenuNames = function() { // to adapt the lil definition-like names in entmenu whilist avoiding strings bleeding in 
    let names = []
    for (let i = 0; i < Object.keys(cor_ru.entity_menu).length; i++) { 
        names.push(["ENTITY::'"+Object.keys(cor_ru.entity_menu)[i]+"'", "СУЩНОСТЬ::'"+cor_ru.entity_menu[Object.keys(cor_ru.entity_menu)[i]].name+"'"])
    }
    names = Object.fromEntries(names)
    return Object.assign(env.localization['strings'], names)
}

cor_ru.getEntityMenuNames();

getLocalizationForPage(true);