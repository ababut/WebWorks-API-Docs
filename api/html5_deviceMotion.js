/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http=//www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


/**
 * @toc {Device Orientation} HTML5 Device Orientation Event
 * @namespace The Orientation event is subsequently fired on a window object when a significant change on orientation occurs. 
 * <br>Registration for orientation events is achieved by calling window.addEventListener with event type "deviceorientation". Implementations must only fire events asynchronously, after this call has returned.
 * <br><br>The orientation of the device is given in terms of the transformation from a coordinate frame fixed on the Earth to a coordinate frame fixed in the device. This is typically implemented by combining information from an accelerometer and a magnetometer.
 * <br><br>The event's absolute property dictates whether the implementation is able or unable to provide absolute values for the three angles of alpha, beta and gammDeviceMotionEvent.prototype.
 * <br><br>The values of alpha, beta and gamma represent the angles measured as the  device's axes change with respect to some fixed coordinate frame. See {@link RotationRate} for details.
 * <br><br>A device lying flat on a horizontal surface with the top of the screen pointing west has the following orientation=
 * <br>			<i> { alpha= 90, beta= 0, gamma= 0 }</i>
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * //Device Orientation is registered by calling window.addEventListener with event type "deviceorientation." 
 * window.addEventListener("deviceorientation", function(event) {
 *     // Events processes event.alpha, event.beta and event.gamma
 *              
 *     // The following code displays the alpha, beta and gamma values on the webworks application page. 
 *     AlphDeviceMotionEvent.prototype.innerHTML = "alpha - " + event.alpha;         
 *     BetDeviceMotionEvent.prototype.innerHTML = "beta - " + event.beta;
 *     GammDeviceMotionEvent.prototype.innerHTML = "gamma - " + event.gamma;
 *               
 * }, true)
 * 
 * &lt;/script&gt;
 */
 DeviceOrientationEvent = {

	/**
	 * @default 90
	 * @type Number
	 * @description Returns the rotation angle around the device frame's Z-axis in degrees. See {@link RotationRate} for details.
	 * @readOnly
	 * @PB10
	 */ 
	DeviceOrientationEvent.prototype.alpha = Number,

	/**
	 * @default 0
	 * @type Number
	 * @description Returns the rotation angle around the device frame's X-axis in degrees. See {@link RotationRate} for details.
	 * @readOnly
	 * @PB10
	 */ 
	DeviceOrientationEvent.prototype.beta = Number,

	/**
	 * @default 0
	 * @type Number
	 * @description Returns the rotation angle around the device frame's Y-axis in degrees. See {@link RotationRate} for details.
	 * @readOnly
	 * @PB10
	 */ 
	DeviceOrientationEvent.prototype.gamma= Number,

	/**
	 * @type boolean
	 * @description Returns true if can provide absolute values for the three angles, false if can provide values for the three angles that are relative to some arbritary orientation.
	 * @PB10
	 */
	DeviceOrientationEvent.prototype.absolute= boolean,

	/**
	 * @type boolean
	 * @description Indicates if the compass of the device is correctly calibrated. If it is set to false, user action, such as performing a manual calibration procedure, is required.
	 * @PB10
	 */
	DeviceOrientationEvent.prototype.compassCalibrated= boolean,
	
	/**
	 * @function 
	 * @description Initializes the event listener and it's parameters
	 * @PB10
	 */
	DeviceOrientationEvent.prototype.initDeviceOrientationEvent = function(){}

};
 

/**
 * @toc {Device Orientation} HTML5 Acceleration
 * @namespace
 * Acceleration data is given in meters per second squared and uses the body axes defined in the device orientation event. Acceleration data (without the effect of gravity) cannot be provided when there is a lack of a gyroscope. 
 * Implementations that are unable to provide acceleration data without the effect of gravity may instead supply the acceleration including the effect of gravity. 
 * <p>The values reported are equal to the acceleration of the device, plus an acceleration equal and opposite to the acceleration due to gravity.
 * This is less useful in many applications but is provided as a means of providing best-effort support. 
 * These values can be stored and manipulated in variables outside the event scope. These values can be used to control the motion of objects defined on the DOM by the device's gyroscope and accelerometer. 
 * <br><br> {@image /images/xyz.jpg} <br><br>
 * <p>Data Examples= 
 * A device lying flat on a horizontal surface with the screen upmost has an acceleration of zero and the following value for accelerationIncludingGravity=
 *     <p><i> {x= 0,
 *      y= 0,
 *      z= 9.81};</i></p></p>
*/
Acceleration = {

	/**
	 * @type Number
	 * @description x-coordinate of the acceleration
	 * @readOnly
	 * @PB10
	 */ 
	Acceleration.prototype.x=Number,

	/**
	 * @type Number
	 * @description y-coordinate of the acceleration
	 * @readOnly
	 * @PB10
	 */ 	
	Acceleration.prototype.y=Number,
	
	/**
	 * @type Number
	 * @description z-coordinate of the acceleration
	 * @readOnly
	 * @PB10
	 */ 
	Acceleration.prototype.z=Number,
};

/**
 * @toc {Device Orientation} HTML5 Rotation Rate
 * @PB10
 * @namespace
 * Represents the Angular velocity of the motion.
 * The orientation of the device is given in terms of the transfromation from a coordinate frame fixed on the Earth to a coordinate frame fixed in the device.
 * The Earth coordinate frame is a 'East, North, Up' frame at the user's location. It has the following 3 axes, where the ground plane is tangent to the WGS 84 spheroid at the user's location.
 * <ul>
 * <li>East (X) is in the ground plane, perpendicular to the North axis and positive towards the East.</li>
 * <li>North (Y) is in the ground plane and positive towards True North (towards the North Pole).</li>
 * <li>Up (Z) is perpendicular to the ground plane and positive upwards.</li>
 * </ul>
 * For a mobile device, the device coordinate frame has the following 3 axes. The axes are defined relative to the standard orientation of the screen, 
 * typically portrait, when slide-out keyboards are not deployed. If the orientation of the screen changes when the device is rotated or a slide-out keyboard is deployed, 
 * this does not affect the orientation of the coordinate frame relative to the device. Users wishing to detect these changes in screen orientation may be able to do so with the existing orientationchange event.
 * <ul>
 * <li>x is in the plane of the screen and is positive towards the right hand side of the screen.</li>
 * <li>y is in the plane of the screen and is positive towards the top of the screen.</li>
 * <li>z is perpendicular to the screen, positive out of the screen.</li>
 * </ul>
 * The transformation from the Earth frame to the device frame is expressed in terms of 3 rotations, 
 * specified in the device frame. Rotations use the right-hand convention= positive rotation around an axis is clockwise when viewed along the positive direction of the axis.
 */ 
RotationRate={

 /*@property {Number} alpha Angular velocity of the device frame around its z axis by alpha degrees/s.
  *@property {Number} beta Angular velocity of the device frame around its x axis by beta degrees/s.
  *@property {Number} gamma Angular velocity of the device frame around its y axis by gamma degrees/s.
  */
  
 	/**
	 * @default 90
	 * @type Number
	 * @description <br/> {@image /images/a-rotation.jpg}</br> Returns the rotation angle around the device frame's Z-axis in degrees.
	 * @readOnly
	 * @PB10
	 */ 
	RotationRate.prototype.alpha = Number,

	/**
	 * @default 0
	 * @type Number
	 * @description <br/> {@image /images/b-rotation.jpg}</br> Returns the rotation angle around the device frame's X-axis in degrees.
	 * @readOnly
	 * @PB10
	 */ 
	RotationRate.prototype.beta = Number,

	/**
	 * @default 0
	 * @type Number
	 * @description <br/> {@image /images/g-rotation.jpg}</br> Returns the rotation angle around the device frame's Y-axis in degrees.
	 * @readOnly
	 * @PB10
	 */ 
	RotationRate.prototype.gamma= Number,
};

/**
 * @toc {Device Orientation} HTML5 Device Motion Event
 * @PB10
 * @namespace
 * This event provides direct access to motion data from an accelerometer and gyroscope. The three pieces of data provided are the acceleration, acceleration including gravity and rotation rate. <br>Because our hardware currently does not have a gyroscope, not all interfaces of this event are available to us (acceleration without gravity and rotation rate.)<br>
 * @example
 * &lt;script type="text/javascript"&gt;
 *
 * window.addEventListener("devicemotion", function(event) {
 *
 *		var ax = "Acceleration X value- " + event.accelerationIncludingGravity.x;
 *		var ay = "Acceleration Y value- " + event.accelerationIncludingGravity.y;
 *		var az = "Acceleration Z value- " + event.accelerationIncludingGravity.z;
 *		var rotation = "Rotation rate - " + event.rotationRate;
 *
 *		alert(ax+"\n"+ay+"\n"+az);
 *
 * }, true);
 *
 * &lt;/script&gt;
 */ 
DeviceMotionEvent = {

	/**
	 * @type Number
	 * @description The regular interval at which the event must fire at, given in milliseconds
	 * @readOnly
	 * @PB10
	 */ 
	DeviceMotionEvent.prototype.interval= Number,
	
	/**
	 * @type Acceleration
	 * @description The acceleration provided by the acceleration property is that of the body and hence excludes the effect of gravity.
	 * @readOnly
	 * @PB10
	 */
	DeviceMotionEvent.prototype.acceleration=null,
	
	/**
	 * @type Acceleration
	 * @description Implementations that are unable to provide acceleration data without the effect of gravity (due, for example, to the lack of a gyroscope) may instead supply the acceleration including the effect of gravity. This is less useful in many applications but is provided as a means of providing best-effort support. 
	 * In this case, the values reported are equal to the acceleration of the device, plus an acceleration equal and opposite to the acceleration due to gravity.
	 * @readOnly
	 * @PB10
	 */
	DeviceMotionEvent.prototype.accelerationIncludingGravity=null,
	
	/**
	 * @type RotationRate
	 * @description The angular velocity of the motion.
	 * @readOnly
	 * @PB10
	 */
	DeviceMotionEvent.prototype.rotationRate=null,
	
	/**
	 * @function
	 * @description Initializes the event listener and it's parameters
	 * @PB10
	 */
	DeviceMotionEvent.prototype.initDeviceMotionEvent = function(){}
};


