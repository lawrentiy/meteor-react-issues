import * as R1 from 'react';
import GoogleMap from 'google-map-react';

/**************************************** *****************************************************************************/
/************************************             MyGreatPlace              *******************************************/
/**************************************** *****************************************************************************/

const K_WIDTH = 30;
const K_HEIGHT = 30;

const greatPlaceStyle = {
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,

    border: '5px solid #f44336',
    borderRadius: K_HEIGHT,
    backgroundColor: 'white',
    textAlign: 'center',
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 4,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

class MyGreatPlace extends R1.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={greatPlaceStyle}>
                <div>{this.props.text}</div>
            </div>
        );
    }
}

MyGreatPlace.defaultProps = {};

/**************************************** *****************************************************************************/
/************************************             SimpleMapPage             *******************************************/
/**************************************** *****************************************************************************/

class SimpleMapPage extends R1.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GoogleMap
                onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
                center={this.props.center}
                zoom={this.props.zoom}>
                <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
                <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
            </GoogleMap>
        );
    }
}

SimpleMapPage.defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};

/**************************************** *****************************************************************************/
/************************************             LocalContainer            *******************************************/
/**************************************** *****************************************************************************/

import { React as R2, render } from 'meteor/lw:tmp'
class LocalContainer extends R2.Component {
    render() {
        return (
            <div style={{width: 400, height: 400}}>
                <h1>LOCAL CONTAINER</h1>
                <SimpleMapPage />
            </div>
        )
    }
}

Meteor.startup(function() {
    var div = document.createElement('div');
    document.body.appendChild(div);
    return render(<LocalContainer />, div);
});