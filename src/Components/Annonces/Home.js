
import React from "react";
import data from "../../data.json";
import Annonces from "./Annonces";
import Filter from "./Filtre";




class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          annonces: data.annonces,
          city: "",
          sort: "",
          typeAnnonce: "",
          type_recherche: ""
        };
    }
    sortProducts = (event) => {
        // impl
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
          sort: sort,
          annonces: this.state.annonces
            .slice()
            .sort((a, b) =>
              sort === "lowest"
                ? a.prix > b.prix
                  ? 1
                  : -1
                : sort === "highest"
                ? a.prix < b.prix
                  ? 1
                  : -1
                : a.id < b.id
                ? 1
                : -1
            ),
        }));
      };

      filterProducts = (event) => {
        // impl
        console.log(event.target.value);
        if (event.target.value === "") {
          this.setState({ city: event.target.value, annonces: data.annonces });
        } else {
          this.setState({
            city: event.target.value,
            annonces: data.annonces.filter(
              (annonce) => annonce.ville.indexOf(event.target.value) >= 0
            ),
          }); 
        }
      };

      filterProductsbyAnnonce = (event) => {
        // impl
        console.log(event.target.value);
        if (event.target.value === "") {
          this.setState({ typeAnnonce: event.target.value, annonces: data.annonces });
        } else {
          this.setState({
            typeAnnonce: event.target.value,
            annonces: data.annonces.filter(
              (annonce) => annonce.typeAnnonce.indexOf(event.target.value) >= 0
            ),
          }); 
        }
      };
      filterProductsbyRecherche = (event) => {
        // impl
        console.log(event.target.value);
        if (event.target.value === "") {
          this.setState({ type_recherche: event.target.value, annonces: data.annonces });
        } else {
          this.setState({
            type_recherche: event.target.value,
            annonces: data.annonces.filter(
              (annonce) => annonce.type_recherche.indexOf(event.target.value) >= 0
            ),
          }); 
        }
      };

      
        
    

      render() {
        return (
          <div className="grid-container">
            
            <main>
              <div className="content1">
                <div className="main1">
                  <Filter
                    ville={this.state.ville}
                    sort={this.state.sort}
                    typeAnnonce={this.state.typeAnnonce}
                    type_recherche={this.state.type_recherche}
                    filterProductsbyAnnonce={this.filterProductsbyAnnonce}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                    filterProductsbyRecherche={this.filterProductsbyRecherche}
                  ></Filter>

                  <Annonces
                    annonces={this.state.annonces}
                  ></Annonces>
                </div>
                
              </div>
            </main>
          </div>
        );
      }
    }
    
    export default Home;