/*
    cor-RU - a russian localization mod for corru.observer;
    see https://github.com/cor-RU/cor-RU for more info

    > localization/auth-layer.js
    localization for /hello
    (---i like sentries)
*/


env.localization.page['hello'] = {dialogues: {},
    definitions: {}, 
    strings: {
        "FOR YOU": "PARA TI",
        "FOR_YOU": "PARA_TI",
        "sentry": "CENTINELA",
        "'thoughtform activity detected'::'advise re-examination'": "'detectada actividad ideoformal'::'se aconseja re-examinación'",
    },
    entityDescriptions: {
        "???": `::IDEOFORMA INCOMPLETA
    ::FIRMA ILLEGIBLE
    <span style="color: var(--obesk-color)" definition="ANÁLISIS::'entidad fragmentada'">::INCOHERENCIA DETECTADA</span>`,
        "sentry": `::IDEOFORMA REACTIVA
    ::DESIGNIO EXPLÍCITO::'autorización'
    <span style="color: var(--obesk-color)" definition="ANÁLISIS::'poca cohesión'">::INCOHERENCIA DETECTADA</span>`,
        "gate::for you": `::IDEOFORMA CONECTIVA
    ::DESTINO::'ideoespacio interno desconocido'
    ::^&&Q@Wd181d0b0d0bcd0bed0b520d0b2d180d0b5d0bcd18f`
    }
}

// === DIALOGUES === //

env.localization.page["hello"].dialogues["enter"] = generateDialogueObject(`
start
    moth
        joder
        estás bien? acabo de ver actividad altísima
        no he visto antes algo así... no creo que te puedas conectar a este

    sys
        ATENCIÓN::'salida renderizable'

    RESPONSES::sys
        renderizar<+>render

render
    sys
        EJECUTANDO::'renderizar'
            EXEC::content.style.opacity = 1;env.hello.beginBgm()
            WAIT::4500

    moth
        sí, parece que no tiene front end. será algún componente
        si no encuentras nada nos rendimos
        ahora vuelvo, están pidiendo comida en la otra sala
    RESPONSES::self
        investigar<+>END
END::MUI('deprohibit')
`)

env.localization.page["hello"].dialogues.generalsentryResponses = generateDialogueObject(`
RESPOBJ::
    RESPONSES::self
        ¿designio?<+>purpose
            SHOWONCE::
        ¿quién tiene autorización?<+>whoisverified
            SHOWONCE::
        ¿y el propósito del quiste?<+>corrupurpose
            SHOWONCE::
            SHOWIF::[["hello__sentry-purpose"]]
        quizas si me dejas pasar<+>letthrough
            SHOWIF::[["hello_sentry_idiot"]]
`)

env.localization.page["hello"].dialogues["sentry"] = generateDialogueObject(`
start
    self
        HOLA

    sentry
        HOLA AMIG@
        FIRMA NO DETECTADA
        POR FAVOR, IDENTIFÍQUESE
        ADICIONALMENTE: LAS RESERVAS DE COMBUSTIBLE ESTÁN BAJAS. SE RECOMIENDA ABASTECIMIENTO

    RESPONSES::self
        identificar<+>iam

iam
    self
        ESTOY AQUÍ PARA AYUDAR

    sentry
        ESO NO ES IDENTIFICACIÓN
        ¿AYUDA? POR QUÉ IBA A NECESITAR...
            EXEC::document.querySelector('.maineye .eye').classList.add('wide')
        NO, HAY ALGUN ERROR
        TENGO TANTA HAMBRE
            EXEC::document.querySelector('.maineye .eye').classList.remove('wide')

    RESPOBJ::generalsentryResponses

purpose
    self
        ¿CUAL ES TU DESIGNIO?

    sentry
        LA AUTORIZACIÓN
        OBVIAMENTE
        CREO
        PERO ME FALTA ALGO
        NO DEBERÍAMOS PODER HABLAR
        AJAJAJAJAJA ESTO ES TAN EXTRAÑO

    RESPOBJ::generalsentryResponses

corrupurpose
    self
        CUAL ES EL DESIGNIO DE ESTE CORRUQUISTE?
        
____SHOWIF::[["hello__sentry-whoisverified", false]]
    sentry
        SE TRATA DE UN CONECTOR DE RED
        CUENTA TAMBIÉN CON FUNCIONALIDADES ADICIONALES NO ESTÁNDARES A PETICIÓN DE
        LO SIENTO SE ME OLVIDO QUE TE FALTABA AUTORIZACIÓN 
        TANTAS NAUSEAS AAJAJA
        PUEDES NO HACER PREGUNTAS COMPROMETEDORAS
        AL MENOS HASTA PROPORCIONAR AUTORIZACIÓN VÁLIDA
____END

____SHOWIF::[["hello__sentry-whoisverified"]]
    sentry
       HE DICHO QUE NO CUENTAS CON AUTORIZACIÓN
            EXEC::document.querySelector('.maineye .eye').classList.add('squint')
        ¿ACASO NO ME ESCUCHAS? IDIOTA
        LO SIENTO NO SE DE DONDE HA SALIDO ESTA AGRESIÓN
            EXEC::change('hello_sentry_idiot', true);document.querySelector('.maineye .eye').classList.remove('squint')
        ME ES TÁN DIFICIL PENSAR
        ¿TIENES COMBUSTIBLE?
____END

    RESPOBJ::generalsentryResponses

whoisverified
    self
        ¿QUIÉN TIENE AUTORIZACIÓN?

____SHOWIF::[["hello__sentry-corrupurpose", false]]
    sentry
        SOLO HAY UNAS POCAS FIRMAS CON ACCESO A ESTE QUISTE
        SEGURAMENTE CONOCES A AQUELLOS A QUIENES LES PERTENECEN? SI NO COMO ESTÁS ACCEDIENDO A ESTO
        QUIZAS DEBES DE HABLAR CON...
        NO NO NO NO TIENES LA AUTORIZACIÓN NECESARIA PARA CONOCER ESO
        OLVÍDALO
        NO ENTIENDO POR QUÉ ME ES TAN DIFÍCIL ESTO
____END

____SHOWIF::[["hello__sentry-corrupurpose"]]
    sentry
        TE HE PEDIDO AMABLEMENTE QUE PARES
            EXEC::document.querySelector('.maineye .eye').classList.add('squint')
        ¿ACASO NO ME ESCUCHAS? IDIOTA
        YA ME ES COMPLICADO PENSAR SIN QUE ME MOLESTES
            EXEC::change('hello_sentry_idiot', true);document.querySelector('.maineye .eye').classList.remove('squint')
        LO SIENTO NO SE DE DONDE HA SALIDO ESTA AGRESIÓN
        ¿TIENES COMBUSTIBLE?
____END

    RESPOBJ::generalsentryResponses

letthrough
    self
        QUIZÁS SI ME DEJAS PASAR

    sentry
        QUÉ?!
            EXEC::document.querySelector('.maineye .eye').classList.add('squint')
        SOY INCAPAZ DE DEJARTE PASAR SIN UNA FIRMA EN CONDICIONES
        AÚN SI QUIERO HACERLO
        ESTE QUISTE ES INHERENTEMENTE INCAPAZ DE RESPONDER A
            EXEC::env.hello.velzie();document.querySelector('.maineye .eye').classList.remove('squint');changeBgm(env.hello.velamb, {length: 4000})
            WAIT::3500
    
    sourceless
        ..................
    
    sentry
        QUE ES ESO

    unknown
        ¿pueden entrar, por favor?
            EXEC::env.hello.velzie()
    
    RESPONSES::self
        hola?<+>posthello
            SHOWONCE::
            EXEC::env.hello.velzie()

posthello
    self
        HOLA?
    
    sourceless
        ..................
            EXEC::env.hello.velzie();env.hello.velamb.fade(1, 0, 6000);corruStatic.play();corruStatic.fade(0, env.corruStaticBaseVol, 6000)
        ..................
    
    moth
        siento haber tardado tanto, no habían decidido todavia de donde pedir, y...
            EXEC::env.hello.velzie()
        sigues con la conexión activa? has encontrado algo?
    
    RESPONSES::self
        parece ser<+>END

END::cutscene(false); MUI("deprohibit");content.classList.remove('looking', 'atyou');cor_ru.processSpecificTranslation(document.querySelectorAll("#content .target"), "entaltname");`)


getLocalizationForPage(true) // --- ensuring that Nothing Gets Fucked Up