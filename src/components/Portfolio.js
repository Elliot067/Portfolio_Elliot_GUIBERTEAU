import '../styles/Portfolio.css'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Portfolio_Main from '../assets/Portfolio_main.jpg';
import Portfolio_BTS from '../assets/Portfolio_BTS.jpg';
import FOG from '../assets/fog.jpg';
import AD from '../assets/Mise_En_Place_AD.jpg';
import LAMP from '../assets/Serveur-Linux.png';
import HYPERVISEUR from '../assets/Hyperviseur.png';
import INFRA from '../assets/Infra.png';

function Portfolio() {
    return (
            
        <div>
            <div id='portfolio'>
            <h1>Mes réalisations</h1>
            </div>

    <Carousel
    infiniteLoop 
    renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
        hasPrev && (
            <button id='btn-prev' onClick={clickHandler}>
                ← 
            </button>
        )
    }
    renderArrowNext={(clickHandler, hasNext, labelNext) =>
        hasNext && (
            <button id="btn-next" onClick={clickHandler}>
               →  
            </button>
        )
    }
    renderThumbs={() => null}
    showStatus={false}
    >
        

       <div id="carousel1">
       <img src={Portfolio_Main} />
       <div class='projet'>Mon portfolio : Réalisé avec REACT</div>
       </div>
       <div id="carousel2">
        <img src={Portfolio_BTS} />
        <div class='projet'>Le porfolio que j'ai réalisé durant mon BTS : Réalisé en HTML / CSS et un peu de JS. https://elliot067.github.io/portfolio/Accueil
        </div>
        </div>
        <div id="carousel3">
        <img src={FOG} />
        <div class='projet'>Mise en place d’une solution permettant le déploiement automatisé de postes informatiques à l’aide de FOG.
        </div>
        </div>
         <div id="carousel4">
        <img src={AD} />
        <div class='projet'>Exploitation des serveurs Windows et un domaine Active Directory.
        </div>
        </div>
        <div id="carousel5">
        <img src={LAMP} />
        <div class='projet'>Déploiement et configuration d’un serveur Linux (DHCP, accès distant SSH, stack LAMP).
        </div>
        </div>
        <div id="carousel6">
        <img src={INFRA} />
        <div class='projet'>Mise en place d’Access Control Lists pour sécuriser une infrastructure réseau.
        </div>
        </div>
        <div id="carousel7">
        <img src={HYPERVISEUR} />
        <div class='projet'>Découverte de plusieurs hyperviseurs (Virtualbox / Vmware / HyperV / Proxmox).
        </div>
        </div>


        </Carousel>
        </div>
        )
}

export default Portfolio