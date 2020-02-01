import React, { useState, useEffect } from 'react';
import { C_Button } from './Components';

function Page() {
    // var teste = undefined;
    
    // function setTest(value) {
    //     teste=value;
    // }
    // O pageSize é uma "variável" na qual eu defini no useState como "undefined" (Estado inicial).
    // E o setPageSize é uma "função" que vai setar o estado (pageSize).

    const [pageSize, setPageSize] = useState(undefined);

    function clickLogo() {
        document.getElementById("container").scrollTo(0, 1222);
    }

    // O useEffect toda vez vai ser chamado na página se caso o "array" dele estiver vazio, caso esteja com estado exemplo pageSize
    // ele vai ser chamado a cada vez que o estado for chamado (pageSize).

    useEffect(() => {
        var size = document.getElementById("body").getBoundingClientRect().height * 3;
        setPageSize(size);
    }, []);

    return (
        <div id="container" style={{maxHeight:950, overflowY:"hidden", scrollBehavior:"smooth"}}>
            <div style={{ height: pageSize }}>
                <div style={{height:255, left:"50%", top:"50%", position:"absolute", marginTop:-125, marginLeft:-125, display:"grid"}}>
                    <img onMouseOver={() => {
                        document.getElementById("photo").style.transform = "scale(1.1)";
                    }} onMouseLeave={() => {
                        document.getElementById("photo").style.transform = "scale(1)";
                    }} onClick={() => clickLogo()} id="photo" style={{ margin:"auto",transition: "0.5s", cursor: "pointer", width: 200, height: 200, borderRadius: 100 }}
                        src="https://instagram.fjoi5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83875171_191377635390287_2085185710885606317_n.jpg?_nc_ht=instagram.fjoi5-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Wwr8Md5J4qwAX_Pxg27&oh=6653a48ca99b346892f053c649e545ef&oe=5EBFAAB8"></img>
                    <h1 style={{ marginTop: 20, color: "pink" }} >Jennifer Oenning</h1>
                </div>
            </div>
        </div>
    )
}

export default Page;
