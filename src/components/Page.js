import React, { useState, useEffect } from "react";
import Card from "./Card";

function Page() {
  // var teste = undefined;

  // function setTest(value) {
  //     teste=value;
  // }
  // O pageSize é uma "variável" na qual eu defini no useState como "undefined" (Estado inicial).
  // E o setPageSize é uma "função" que vai setar o estado (pageSize).

  const [pageSize, setPageSize] = useState(undefined);
  const [visibilityButton, setVisibilityButton] = useState(undefined);

  function clickLogo() {
    document.getElementById("container").scrollTo(0, document.getElementById("containerBoxes").offsetTop);
    setVisibilityButton(true);
  }

  // O useEffect toda vez vai ser chamado na página se caso o "array" dele estiver vazio, caso esteja com estado exemplo pageSize
  // ele vai ser chamado a cada vez que o estado for chamado (pageSize).

  useEffect(() => {
    var size = window.innerHeight;
    setPageSize(size);
  }, []);

  var cards = [
    {
      title: "Sete Melhores",
      paragraph:"Projeto desenvolvido para melhores localidades da região de Jaraguá do Sul",
      link: "http://dev.setemelhores.com/jaragua-do-sul/",
      transition: "0.5s"
    },
    {
      title: "PPnewsfb",
      paragraph: "Projeto desenvolvido para postagens de notícias",
      link: "https://ppnewsfb.com.br/",
      transition: "1s"
    }
  ];

  return (
    <div
      id="container"
      style={{
        maxHeight: pageSize,
        overflowY: "auto",
        overflowX:"hidden",
        scrollBehavior: "smooth",
        position: "relative"
      }}
    >
      <div style={{ height: pageSize}}>
        <div
          style={{
            height: 255,
            left: "50%",
            top: "50%",
            position: "absolute",
            marginTop: -247,
            marginLeft: -125,
            display: "grid"
          }}
        >
          <a 
            style={{
              display: "inline-block",
              backgroundColor: "pink",
              width: 50,
              height: 50,
              textAlign: "center",
              borderRadius: 4,
              position: "fixed",
              bottom: 30,
              right: 30,
              opacity: 1,
              transition: "0.5s",
              transform: `scale(${!visibilityButton ? "0" : "1"})`,
              justifyContent: "center",
              display:"flex",
              alignItems:"center",
              visibility: visibilityButton ? undefined : "hidden",
              cursor:"pointer",
              zIndex:99
            }}
            id="button"
            onMouseOver={() => {
              document.getElementById("button").style.transform = "scale(1.1)";
            }}
            onMouseLeave={() => {
              document.getElementById("button").style.transform = "scale(1)";
            }}
            onClick={() => {
              document.getElementById("container").scrollTop = 0;
              setVisibilityButton(false);
            }}
          ><i style={{color:"white", fontSize:50}} class="fas fa-angle-up"></i></a>

          <img
            onMouseOver={() => {
              document.getElementById("photo").style.transform = "scale(1.1)";
            }}
            onMouseLeave={() => {
              document.getElementById("photo").style.transform = "scale(1)";
            }}
            onClick={() => clickLogo()}
            id="photo"
            style={{
              margin: "auto",
              transition: "0.5s",
              cursor: "pointer",
              width: 200,
              height: 200,
              borderRadius: 100
            }}
            src="https://instagram.fjoi5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83875171_191377635390287_2085185710885606317_n.jpg?_nc_ht=instagram.fjoi5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Wwr8Md5J4qwAX_Pxg27&oh=6653a48ca99b346892f053c649e545ef&oe=5EBFAAB8"
          ></img>

          <h1 style={{ marginTop: 20, color: "pink" }}>Jennifer Oenning</h1>
        </div>
      </div>
      <div id="containerBoxes" style={{height:pageSize}}>
        <div style={{ flexWrap:"wrap",display:"flex",justifyContent:"center",margin:20}}>
          {cards.map((item) =>
            <div className="containerBox" style={{ transition:item.transition ,padding:20,marginBottom:40}}>
              <Card title={item.title} paragraph={item.paragraph} link={item.link} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
