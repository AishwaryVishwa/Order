import React from 'react'
import Typewriter from 'typewriter-effect';
function TypoEffect() {
    return (
        <>
            <Typewriter
                options={
                    {
                        loop: true,
                    }
                }
                onInit={(typewriter) => {
                    typewriter.typeString(`<strong>W</strong>e provide best <strong>R</strong>estaurants.`)

                        .pauseFor(2500)



                    typewriter.typeString(` So you can have great meal of the day`)
                        .pauseFor(1000)
                        .deleteChars(3)
                    typewriter.typeString(`<strong>Life</strong>`)
                        .pauseFor(1000)
                    typewriter.typeString(`.`)

                        //  .stop();
                        .start();

                }}
            />
        </>
    )
}

export default TypoEffect