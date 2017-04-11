import React, { Component } from 'react';
var photos=[{
        id: 1,
        url: 'http://www.ofifacil.com/ideas-ejemplos/varios/menu-carta-restaurante-design-diseno-maquetacion-009.jpg',
        isEditable: true,
          menuSections: [
            {
            name: 'Breakfast',
            menuItems: [
            {
              name: 'Pancakes',
              rect: { x: 100, y: 20, width: 200, height: 20 }
            },{
              name: 'Waffles',
              rect: { x: 100, y: 40, width: 200, height: 20 }
            }]
          },
            { name: 'Lunch', menuItems: [] },
            { name: 'Dinner', menuItems: [] }
          ]
        },
        {
        id: 2,
        url: 'http://www.ofifacil.com/ideas-ejemplos/varios/im33g18.jpg',
        isEditable: false,
          menuSections: [
            {
              name: 'Lunch',
              menuItems: [
              {
                name: 'Pancakes',
                rect: { x: 100, y: 20, width: 200, height: 20 }
              }]
            },
            { 
              name: 'Dinner', 
              menuItems: [] 
            },
            { 
              name: 'Soups', 
              menuItems: [] 
            }
          ]
        }
        ];

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      photo:[]
    }

  }

  render() {
    return (
      <div className="App">
        <Header numberPage={2} />
          <Favorite 
            favoriteImage={<FavoriteImage photos={photos}/>}
            favoriteDetail={<FavoriteDetail photos={photos}/>}
          />
          <PhotoEditor 
            photos={photos}
            uploadPhoto={<UploadPhoto/>}
          />
          
      </div>
    );
  }
}

export default App;


class Header extends Component{
  render(){
    return (<div><h1>Página {this.props.numberPage||'-'}</h1></div>);
  }
}

 function Favorite({favoriteImage,favoriteDetail}){
    return (<div>
          {favoriteImage}
          {favoriteDetail}
      </div>);
}

function FavoriteImage({photos}){
    const favoriteImage=photos.filter((x)=>{return x.isEditable===true})
      .map((y)=>{return <img key={y.id} src={y.url} alt="FavoriteImage"></img> })
  
    return (<div>
     {favoriteImage}
    </div>);
}

function FavoriteDetail({photos}){
    const menuSections=[];
    const menuItems=[];
    
    if(photos.filter((q)=>{return q.isEditable===true}).length>0){
     photos.map((x)=>{x.menuSections.map((y)=>{
                        menuSections.push(y.name+',')
                      });
                  });
    
    photos.filter((q)=>{return q.isEditable===true})
    .map((x)=>{x.menuSections.map((y)=>{
                      y.menuItems.map((z)=>{
                        if(z) menuItems.push(z.rect)
                      });
                    });
                  });
    
    
    
    return (<div>
      <div><p>Menu Sections: { menuSections }</p></div>
      <p>Menu Items: Cuenta con <strong>{menuItems.length}</strong>
         {menuItems.length===1?' un':''} elemento{menuItems.length===1?'':'s'}
      </p>
    </div>);
    }else{
      return (<div></div>)
    }
  
}

function PhotoEditor({uploadPhoto,photos}){
  const items=photos.map((x)=>{
                return <PhotoItem src={x.url} key={x.id}/>
              })
    return (<div>
      {items}
      {uploadPhoto}
    </div>);
  
}

function PhotoItem({src}){
  //console.log(photos)
  //const items=photos.map((x)=>{return <img key={x.id} src={x.url}></img>})

  return(<div>
    <img src={src}></img>
  </div>)
}

function UploadPhoto(){
  return(<div>Upload Area</div>)
}