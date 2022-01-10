import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="container-filter">
        <div className="filter">
        <div className="filter-result">{this.props.count} Annonces found</div>
        <div className="filter-sort">
          
              <div class="search">
                  <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                  <button type="submit" class="searchButton">
                  <i class="fa fa-search"></i>
                  </button>
              </div>
        </div>
      </div>
      
      <div className="filter1">
        
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option>Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-city">
          City{" "}
          <select value={this.props.city} onChange={this.props.filterProducts}>
            <option value="">ALL</option>
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Fes">Fes</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Kenitra">Kenitra</option>
            <option value="Tanger">Tanger</option>
          </select>
        </div>
          
        <div className="filter-city">
          Type Annonce{" "}
          <select value={this.props.typeAnnonce} onChange={this.props.filterProductsbyAnnonce}>
            <option value="">ALL</option>
            <option value="Location">Location</option>
            <option value="Vente">Vente</option>
            <option value="Location vacances">location vacances</option>
          </select>
        </div>

        <div className="filter-city">
          Type Recherche{" "}
          <select value={this.props.type_recherche} onChange={this.props.filterProductsbyRecherche}>
            <option value="">ALL</option>
            <option value="Appartement">Appartement</option>
            <option value="Villa">Villa</option>
            <option value="Maison">Maison</option>
          </select>
        </div>
      </div>
      </div>
    );
  }
}