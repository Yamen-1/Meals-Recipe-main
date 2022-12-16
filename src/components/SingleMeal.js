import React from 'react'
import { useParams } from 'react-router-dom';

export default function SingleMeal({categories, meals, singleImage}) {

    let {selectedMeal} = useParams()

    console.log(categories);


  return (
    <div className='SingleMeal'>
        
        <img src={singleImage} alt="selected img" width='100%' />

        <h1>{selectedMeal} recept:</h1>



      

        <div className="para-container">

            <p>
                Dragée tootsie roll bonbon pudding bear claw tart ice cream halvah brownie. Cotton candy chocolate fruitcake jelly-o pudding. Marzipan jelly pie chocolate sugar plum apple pie. Cookie I love dragée halvah cake donut gingerbread. Liquorice jelly-o fruitcake tootsie roll muffin candy canes cake chupa chups. Gingerbread biscuit dragée halvah gummi bears I love cookie lemon drops.
            </p>

            <p>
                Jelly-o gummies jelly-o topping cheesecake cake croissant cheesecake pie. Pie shortbread apple pie pastry gummies marzipan gingerbread cake. Candy chocolate bar ice cream cake biscuit dessert marshmallow bear claw. I love chocolate cake cheesecake sweet roll donut tootsie roll. Lollipop donut soufflé tootsie roll wafer jujubes fruitcake I love gingerbread. Powder sweet pudding sugar plum pudding jujubes.
            </p>

            <p>
                Cupcake marzipan I love carrot cake carrot cake marshmallow croissant lollipop. Topping I love marzipan muffin gummies chocolate cake I love. Wafer croissant jelly I love donut. Cupcake candy canes topping bear claw I love biscuit donut gingerbread. Danish chocolate bar tootsie roll candy bonbon danish halvah tootsie roll I love. Candy I love cupcake sugar plum gummi bears candy canes marzipan. Jelly-o sweet jelly chocolate bar I love tootsie roll dessert icing cupcake. I love cookie dessert sweet roll icing jujubes sugar plum brownie jelly beans. Tart cotton candy dragée tootsie roll carrot cake lollipop cake soufflé.
            </p>
        </div>

    </div>
  )
}
