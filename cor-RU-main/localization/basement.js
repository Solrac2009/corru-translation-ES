/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/basement.js
    localization for /
    (---yes just /
    ---thats the starting page)
*/


env.localization.page['fbx'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "about this job": "sobre este trabajo",

        "DENDRITIC CYST": "QUISTE DENDRÍTICO",
        "touch": "tocar",
        "lift": "levantar",
        "the notes I got say that there were apparently a ton of these on the ship": "dicen mis notas que habían bastantes en la nave",
        "all sorts of sizes too": "de varios tamaños",
        "but most were too heavy to retrieve... so we just got this small one": "pero la mayoría pesaban demasiado... solo cogieron este pequeño",
        "the dendritic cyst has a rigid outer shell. it's unlikely that there's any way to connect to it": "el quiste dendrítico tiene una capa externa rígida. es improbable que haya manera de conectarse a el",
        "the dendritic cyst is surprisingly heavy. turning it in your hands produces a cascade of metallic clinking noises from within. when you set it back down, its tendrils find a new orientation to support itself on the table": "el quiste dendrítico es sorprendentemente pesado. al moverlo en tus manos notas una multitud de sonidos metalicos. cuando lo vuelves a dejar en la mesa, sus ramas encuentran una nueva posición",

        "FRACTALLINE CYST": "QUISTE FRACTALINO", 
        "nobody knows what this one is.. pretty sure it's dead though": "no sabemos de que se trata este.. probablemente esté muerto",
        "the fractalline cyst's outer shell is slimy and has some yield. if you squeezed it enough, it would probably turn to sludge... best to just leave this one alone": "la capa externa del quiste fractalino es viscosa y cede al tacto. si aplicases presión, se desintegraría... mejor dejarlo en paz",

        "CYST": "QUISTE", 
        "so this is the mystery piece": "esta es la pieza interesante",
        "it's in bizarrely good condition considering it was at the bottom of the ocean for however long it's been since, y'know": "esta en condición muy buena teniendo en cuenta que ha estado en el fondo del oceano desde... bueno, ya sabes",
        "no clue what it is aside from some similar internal structure to network cysts we've found before": "ni idea de lo que es, menos que comparte algunas estructuras internas con los quistes de red que hemos encontrado",
        "the cyst has a solid outer shell. a few circular points near the top are less firm than the rest. in your experience, these are usually connection points. you can definitely scan this point more thoroughly.": "el quiste tiene una capa externa sólida. unos puntos circulares en el superior son menos firmes que el resto. en tu experiencia, estos suelen ser puntos de conexión. puedes escanear este punto en mas detalle",
        "depth scan": "escaneo profundo",
        "ANALYSIS::'valid nerve point';'connection enabled'": "ANÁLISIS::'punto nervioso válido';'conexión permitida'",
        "::CORRUCYSTIC ENTITY": "`::ENTIDAD CORRUQUÍSTICA",
        "::NO FUNCTION SIGNATURE": "::SIN FIRMA DE FUNCIÓN",
        "::CONNECTIVE MEMBRANE EXPOSED": "::MEMBRANA CONECTIVA EXPUESTA",

        "CYSTIC COLUMN": "COLUMNA QUÍSTICA", 

        "CONNECTION POINT": "PUNTO DE CONEXIÓN",

        "attempt connection": "intentar establecer conexión",
        "CONNECTION_POINT_LOCATED": "PUNTO_DE_CONEXIÓN_LOCALIZADO",
        "__COMMENCING__": "__COMENZANDO__",   
        
        "plastic box": "caja de plástico",
        "use to feed column": "usar para abestecer columna",
        "empty plastic box": "caja de plástico vacía",

        "pistol": "pistola",
        "kill dendritic cyst and feed column": "matar al quiste dendrítico para abastecer columna",

        "hey buddy": "ey",
        "welcome back": "me alegra verte",
        "you ready to feed this thing?": "tienes la mente preparada para matar a esta cosa?",
        "haven't heard back on the request yet": "todavía no me han dicho nada con respecto a mi solicitud",
        "so, still killing time here": "por tanto solo estamos matando el tiempo"
    },
    entityDescriptions: {
        "dendritic cyst": `::ENTIDAD CORRUQUÍSTICA
::FIRMA DE FUNCIÓN: RECIPIENTE
::MEMBRANA CONECTIVA NO EXPUESTA`,
        "fractalline cyst": `::ENTIDAD CORRUQUÍSTICA
::FIRMA DE FUNCIÓN DAÑADA
::MEMBRANA CONECTIVA NO EXPUESTA`,
        "cystic column": `::ENTIDAD CORRUQUÍSTICA
::FIRMA DE FUNCIÓN: MANTIENE AL CORRUQUISTE
::MEMBRANA CONECTIVA NO EXPUESTA`,
        "cyst": `::ENTIDAD CORRUQUÍSTICA
::SIN FIRMA DE FUNCIÓN
::MEMBRANA CONECTIVA EXPUESTA`,
        "connection point": `::COMPONENTE DE ENTIDAD CORRUQUÍSTICA
::PUNTO DE CONEXIÓN VÁLIDO`,
        "plastic box": `::CONTENEDOR SINTÉTICO
::CONTIENE METAL INERTE`,
        "empty plastic box": `::CONTENEDOR SINTÉTICO
::VACÍO`,
        "pistol": `::PISTOLA DE PERNO CAUTIVO
::MODELO G.E.T. 2052
::MODIFICACIONES ILEGALES DETECTADAS`,
    }
}

// === DIALOGUES === //
    // see everystuff.js for depthrecovery dialogue

    
// == MOTH == //

env.localization.page["fbx"].dialogues.mthhubresp = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        ¿donde se encontraron estos quistes?<+>where
        que hacemos con esta pistola<+>gun
            SHOWIF::[["ep1_showmaterials", "both"], ["ep1_fed", true]]
        no importa<+>CHANGE::++moth
            FAKEEND::(назад)
`)
env.localization.page['fbx'].dialogues["mth++fbx"] = generateDialogueObject(`
start
    self
        tengo una pregunta

    moth
        si?
    
    RESPOBJ::mthhubresp

gun
    self
        ¿entonces, nos quedamos la pistola?

    moth
        ah, pues,
        ya sabes- puede que nos sea util
        la verdad es que no me apetece devolverla lol
        i&d no parecían necesitarla, no suelen necesitar matar algo
        ya la devolveré
    
    RESPOBJ::mthhubresp

where
    self
        ¿de dónde sacaron todo esto?
    
    moth
        lo encontraron en un naufragio en el fondo del mar cercano a nueva zelanda
        y con "cerca" quiero decir a mil millas de la costa sur
        estaba tan lejos de todo, que...
        pensé que nueva zelanda sería el punto mas cercano que reconocerías
        créen que la corriente se lo llevo una buena distancia de donde séa que realmente cayó
        estiman que lleva allí unos 20 o 30 años

    RESPOBJ::mthhubresp
`)


env.localization.page['fbx'].dialogues["index"] = generateDialogueObject(`
start 
    moth
        ey. me alegra verte 
        la verdad es que no sabía si te presentarías, teniendo en cuenta que es un lote tan pequeño
        hoy en día se están encontrando muchos restos marítimos
        bueno... iré preparando todo, ve mirándolo si te apetece
        
    sourceless
        las máquinas descodificadoras se enciended, iluminando una compleja red de cables
            EXEC::document.querySelectorAll('.backwall').forEach(e=>e.classList.add('active'))
        
    RESPONSES::self
        qué es esto<+>whatis
        sentarte<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)

whatis
    self
        ¿qué es esto?
    moth
        lo encontraron en un naufragio obesk cercano a nueva zelanda
        mis notas dicen que la mayoría estaba derretida, que es bastante inusual...
        bueno... la pieza principal es el aquel grande
        un pedestal suele implicar algo importante, pero no sabemos lo que es
        álex hizo un escaneo básico y dice que se parece un poco a un nodo de red
        no sabemos ni si aceptará un neuroclavo
        en cualquier caso, a ti te pagan lo mismo... cuando quieras
        
    RESPONSES::self
        sentarse<+>sit
            SHOWIF::["PAGE!!intrositting", false]
            EXEC::change('PAGE!!intrositting', true)
        activar neuroclavo<+>END
            SHOWIF::"PAGE!!intrositting"
        
sit
    sourceless
        el taburete metálico raspa contra el hormigón
            EXEC::env.introSit()
            WAIT::3500

    sourceless
        la silla es fría e incómoda. la luz de tu protección se refleja en los quistes perlados
        
    moth
        ya sabes- neuroclavo encendido

    RESPONSES::self
        que es esto<+>whatis
            SHOWONCE::
        activar neuroclavo<+>END
        
END::env.enableSpikeCursor();MUI('deprohibit')
`)



getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up