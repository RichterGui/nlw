const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir
    /* await saveOrphanage(db, {

         lat: "-27.2142799",
         lng: "-49.6488071",
         name: "Lar dos meninos",
         about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
         whatsapp: "99998855",
         images: [
             " https://interfisio.com.br/wp-content/uploads/2016/11/crian%C3%A7a-feliz-barulhenta-inquieta.png",

             "https://i.ytimg.com/vi/Ir7UmJ_foHs/sddefault.jpg"
         ].toString(),
         instructions: "Venha como se sentir a vontade e traga muito amor e paciência pra dar.",
         opening_hours: "Horários de visita das 8h até 18h.",
         open_on_weekends: "1"

     })*/

    //consultar
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    //consultar orfanato pelo id
    //  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //  console.log(orphanage)

    //delete
    //  console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    //  console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})