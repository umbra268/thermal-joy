import React, { Component} from 'react';
import { Map, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"


export default class _Map extends Component {
  render() {
    return (
      <Map center={[-38.15257984677826, 176.26486301422122]} zoom={14} style={{ width: '100%', height: 600 }}>
        <TileLayer
          attribution="Map tiles by Stamen Design"
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
          <EditControl
            position='topright'
            onEdited={this._onEditPath}
            onCreated={this._onCreate}
            onDeleted={this._onDeleted}
            draw={{
              rectangle: false
            }}
          />
        </FeatureGroup>
      </Map>
    )
  }
}
