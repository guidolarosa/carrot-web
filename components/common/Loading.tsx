import Router from "next/router";
import NProgress from 'nprogress';

import { useEffect, useState} from "react";
import { Box } from 'rebass';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done())

const Loading = () => {
    useEffect(() => {
        NProgress.start();
    
        let imgs = document.images,
        len = imgs.length,
        counter = 0;
    
        const incrementCounter = () => {
            counter++;
            if ( counter === len ) {
                // console.log( 'All images loaded!' );
                NProgress.done();
            }
        };
        
        [].forEach.call( imgs, ( img : any ) => {
            if(img.complete)
                incrementCounter();
            else
                img.addEventListener( 'load', incrementCounter, false );
        });
    
    }, []);

    return (
        <></>
    )
}

export default Loading;