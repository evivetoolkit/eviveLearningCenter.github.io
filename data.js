var homeData = [
  {
    id:'GettingStarted',
    title:'Getting Started',
    href:'index.html?t=GettingStarted',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/Getting Started.png'
  },
  {
    id:'eviveDocumentation',
    title:'evive Documentation',
    href:'index.html?t=Features',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/Features.png'
  },
  {
    id:'ProgrammingInterface',
    title:'Programming Interface',
    href:'index.html?t=ProgrammingInterface',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/Programming Interface.png'
  },
  {
    id:'Circuit',
    title:'Circuit Diagrams',
    href:'index.html?t=eviveFritzing',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/Circuit.png'
  },
  {
    id:'LearningModules',
    title:'Kits and Learning Modules',
    href:'index.html?t=LearningModules',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/LearningModule.png'
  },
  {
    id:'eviveFirmware',
    title:'evive Software',
    href:'/eviveDocumentation/html/index.html',
    target:'_blank',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/Firmware.png'
  },
  {
    id:'Resources',
    title:'Resources',
    href:'index.html?t=Resources',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/resources.png'
  },
  {
    id:'Forum',
    title:'Forum',
    href:'index.html?t=Forum',
    desc:'Battery installation and uploading code for the first time',
    img:'home-images/Forum.png'
  },
];

var pageInfo = [
  {
    id:'GettingStarted',
    templateUrl:'t/GettingStarted.html',
    sidebar:true,
  },
  {
    id:'Features',
    templateUrl:'views/Features.html',
    sidebar:false,
    description: 'evive',
  },
  {
    id:'ProgrammingInterface',
    templateUrl:'views/ProgrammingInterface.html',
    sidebar:true,
  },
  {
    id:'Circuit',
    templateUrl:'views/eviveFritzing.html',
    sidebar:true,
  },
  {
    id:'LearningModules',
    templateUrl:'views/LearningModules.html',
    sidebar:true,
  },
  {
    id:'eviveFirmware',
    templateUrl:'eviveDocumentation/html/index.html',
    sidebar:false,
  },
  {
    id:'Resources',
    templateUrl:'t/Resources.html',
    sidebar:true,
  },
  {
    id:'Forum',
    templateUrl:'t/Forum.html',
    sidebar:true,
  },
  {
    id:'AnalogPin',
    templateUrl:'t/AnalogPin.html',
    sidebar:true,
  },
  {
    id:'Arduino',
    templateUrl:'t/Arduino.html',
    sidebar:true,
  },
  {
    id:'Bluetooth',
    templateUrl:'t/bluetooth.html',
    sidebar:true,
  },
  {
    id:'Buzzer',
    templateUrl:'t/Buzzer.html',
    sidebar:true,
  },
  {
    id:'Control',
    templateUrl:'t/Control.html',
    sidebar:true,
  },
  {
    id:'DigitalPin',
    templateUrl:'t/DigitalPin.html',
    sidebar:true,
  },
  {
    id:'FunctionGenerator',
    templateUrl:'t/FunctionGenerator.html',
    sidebar:true,
  },
  {
    id:'HardwareInteraction',
    templateUrl:'t/HardwareInteraction.html',
    sidebar:true,
  },
  {
    id:'IndicationLED',
    templateUrl:'t/IndicationLED.html',
    sidebar:true,
  },
  {
    id:'Interrupt',
    templateUrl:'t/Interrupt.html',
    sidebar:true,
  },
  {
    id:'io3v3',
    templateUrl:'t/io3v3.html',
    sidebar:true,
  },
  {
    id:'Menu',
    templateUrl:'t/Menu.html',
    sidebar:true,
  },
  {
    id:'MiniOscilloscope',
    templateUrl:'t/MiniOscilloscope.html',
    sidebar:true,
  },
  {
    id:'Motor',
    templateUrl:'t/Motor.html',
    sidebar:true,
  },
  {
    id:'NavKey',
    templateUrl:'t/NavKey.html',
    sidebar:true,
  },
  {
    id:'Physical',
    templateUrl:'t/Physical.html',
    sidebar:true,
  },
  {
    id:'Potentiometer',
    templateUrl:'t/Potentiometer.html',
    sidebar:true,
  },
  {
    id:'PWM',
    templateUrl:'t/PWMPins.html',
    sidebar:true,
  },
  {
    id:'Power',
    templateUrl:'t/Power.html',
    sidebar:true,
  },
  {
    id:'RTC',
    templateUrl:'t/RTC.html',
    sidebar:true,
  },
  {
    id:'SDCard',
    templateUrl:'t/SDCard.html',
    sidebar:true,
  },
  {
    id:'Sensing',
    templateUrl:'t/Sensing.html',
    sidebar:true,
  },
  {
    id:'SerialPins',
    templateUrl:'t/SerialPins.html',
    sidebar:true,
  },
  {
    id:'Servo',
    templateUrl:'t/Servo.html',
    sidebar:true,
  },
  {
    id:'SlideSwitch',
    templateUrl:'t/SlideSwitch.html',
    sidebar:true,
  },
  {
    id:'Stepper',
    templateUrl:'t/Stepper.html',
    sidebar:true,
  },
  {
    id:'TactileSwitch',
    templateUrl:'t/TactileSwitch.html',
    sidebar:true,
  },
  {
    id:'Touch',
    templateUrl:'t/Touch.html',
    sidebar:true,
  },
  {
    id:'UserDefinedPrograms',
    templateUrl:'t/UserDefinedPrograms.html',
    sidebar:true,
  },
  {
    id:'BuzzerCode',
    templateUrl:'t/ArduinoCodes/BuzzerCode.html',
    sidebar:true,
  },
    {
    id:'BasicKit',
    templateUrl:'t/BasicKit.html',
    sidebar:true,
  },
    {
    id:'IOTKit',
    templateUrl:'t/IOTKit.html',
    sidebar:true,
  },
    {
    id:'UltimateKit',
    templateUrl:'t/UltimateKit.html',
    sidebar:true,
  },
  {
    id:'StarterKit',
    templateUrl:'t/StarterKit.html',
    sidebar:true,
  },
  {
    id:'Scratch',
    templateUrl:'t/Scratch.html',
    sidebar:true,
  },
  {
    id:'Labview',
    templateUrl:'t/Labview.html',
    sidebar:true,
  },
  {
    id:'TFT',
    templateUrl:'t/TFT.html',
    sidebar:true,
  },
  {
    id:'Relay',
    templateUrl:'t/Relay.html',
    sidebar:true,
  },
  {
    id:'MotorDriver',
    templateUrl:'t/MotorDriver.html',
    sidebar:true,
  },
  {
    id:'ESP',
    templateUrl:'t/ESP.html',
    sidebar:true,
  },
  {
    id:'HowItWorks',
    templateUrl:'t/HowItWorks.html',
    sidebar:false,
  },
  {
    id:'PartnerWithUs',
    templateUrl:'t/PartnerWithUs.html',
    sidebar:false,
  },
  {
    id:'Services',
    templateUrl:'t/Services.html',
    sidebar:false,
  },
  {
    id:'ContactUs',
    templateUrl:'t/ContactUs.html',
    sidebar:false,
  },
  {
    id:'PinState',
    templateUrl:'t/PinState.html',
    sidebar:true,
  },
  {
    id:'SerialMonitor',
    templateUrl:'t/SerialMonitor.html',
    sidebar:true,
  },
  {
    id:'PlugAndPlayInterface',
    templateUrl:'t/PlugAndPlayInterface.html',
    sidebar:true,
  },
  {
    id:'Feedback',
    templateUrl:'t/Feedback.html',
    sidebar:true,
  },
  {
    id:'Resources',
    templateUrl:'t/Resources.html',
    sidebar:true,
  },
  {
    id:'Ammeter',
    templateUrl:'t/Ammeter.html',
    sidebar:true,
  },
  {
    id:'Voltmeter',
    templateUrl:'t/Voltmeter.html',
    sidebar:true,
  },
  {
    id:'ADC',
    templateUrl:'t/ADC.html',
    sidebar:true,
  },
  {
    id:'MobileRobot',
    templateUrl:'t/MobileRobot.html',
    sidebar:true,
  },
  {
    id:'RoboticArm',
    templateUrl:'t/RoboticArm.html',
    sidebar:true,
  },
  {
    id:'HomeAutomation',
    templateUrl:'t/HomeAutomation.html',
    sidebar:true,
  },
  {
    id:'BatteryInstallation',
    templateUrl:'t/BatteryInstallation.html',
    sidebar:true,
  },
  {
    id:'DifferentialDriveMobileRobot',
    templateUrl:'t/DifferentialDriveMobileRobot.html',
    sidebar:true,
  },
  {
    id:'LineFollowingRobot',
    templateUrl:'t/LineFollowingRobot',
    sidebar:true,
  },
  {
    id:'ObstacleAvoidingRobot',
    templateUrl:'t/ObstacleAvoidingRobot.html',
    sidebar:true,
  },
  {
    id:'PickingPlacingRoboticArm',
    templateUrl:'t/PickingPlacingRoboticArm.html',
    sidebar:true,
  },
  {
    id:'SketchingRoboticArm',
    templateUrl:'t/SketchingRoboticArm.html',
    sidebar:true,
  },
  {
    id:'TFTScreenHelloWorld',
    templateUrl:'t/TFTScreenHelloWorld.html',
    sidebar:true,
  },
  {
    id:'eviveFritzing',
    templateUrl:'t/eviveFritzing.html',
    sidebar:true,
  },
  {
    id:'ArduinoLibrary',
    templateUrl:'t/ArduinoLibrary.html',
    sidebar:true,
  },
  {
    id:'ArduinoStructureAndFlow',
    templateUrl:'t/ArduinoStructureAndFlow.html',
    sidebar:true,
  },
  {
    id:'ArduinoVariable',
    templateUrl:'t/ArduinoVariable.html',
    sidebar:true,
  },
  {
    id:'ArduinoArithmaticOperator',
    templateUrl:'t/ArduinoArithmaticOperator.html',
    sidebar:true,
  },
  {
    id:'ArduinoRelationalOperator',
    templateUrl:'t/ArduinoRelationalOperator.html',
    sidebar:true,
  },
  {
    id:'ArduinoIfStatement',
    templateUrl:'t/ArduinoIfStatement.html',
    sidebar:true,
  },
  {
    id:'ArduinoLogicOperator',
    templateUrl:'t/ArduinoLogicOperator.html',
    sidebar:true,
  },
  {
    id:'ArduinoForLoop',
    templateUrl:'t/ArduinoForLoop.html',
    sidebar:true,
  },
  {
    id:'ArduinoIncrementalOperator',
    templateUrl:'t/ArduinoIncrementalOperator.html',
    sidebar:true,
  },
  {
    id:'ArduinoWhileLoop',
    templateUrl:'t/ArduinoWhileLoop.html',
    sidebar:true,
  },
  {
    id:'Tutorial',
    templateUrl:'t/Tutorial.html',
    sidebar:true,
  },
];


var sidebarInfo = [
  {
    title:'GettingStarted',
    href:'?t=GettingStarted',
    children:[
      {
        title:'Battery Installation',
        href:'?t=BatteryInstallation',
      }
    ]
  },
  {
    title:'evive Documentation',
    href:'?t=Features',
    children:[
      {
        title:'Power Module',
        href:'?t=Power',
        children:[
          {
            title:'Internal Battery',
            href:'?t=Power#InternalBattery',
          },
          {
            title:'Power Input',
            href:'?t=Power#PowerInput',
          },
          {
            title:'Power Output',
            href:'?t=Power#PowerOutput',
          },
          {
            title:'Indication LED',
            href:'?t=Power#LED',
          },
          {
            title:'Protections',
            href:'?t=Power#Protections',
          },
        ]
      },
      {
        title:'Hardware Interaction',
        href:'?t=HardwareInteraction',
        children:[
          {
            title:'Potentiometer',
            href:'?t=Potentiometer',
          },
          {
            title:'Tactile Switch',
            href:'?t=TactileSwitch',
          },
          {
            title:'Slide Switch',
            href:'?t=SlideSwitch',
          },
          {
            title:'5-way Navigation Key',
            href:'?t=NavKey',
          },
          {
            title:'Capacitive Touch',
            href:'?t=Touch',
          },
        ]
      },
      {
        title:'Plug and Play Interface',
        href:'?t=PlugAndPlayInterface',
        children:[
          {
            title:'DC Motor',
            href:'?t=Motor',
          },
          {
            title:'DC Motor Driver',
            href:'?t=MotorDriver',
          },
          {
            title:'Servo Motor',
            href:'?t=Servo',
          },
          {
            title:'Stepper Motor',
            href:'?t=Stepper',
          },
          {
            title:'Relay',
            href:'?t=Relay',
          },
          {
            title:'Pnuematics',
            href:'?t=Pnuematics',
          },
        ]
      },
      {
        title:'Modes of Feedback',
        href:'?t=Feedback',
        children:[
          {
            title:'Piezo Buzzer',
            href:'?t=Buzzer',
          },
          {
            title:'TFT Screen',
            href:'?t=TFT',
          },
          {
            title:'Programmable LEDs',
            href:'?t=IndicationLED',
          },
        ]
      },
      {
        title:'Data Aquisition Module',
        href:'?t=DataAquisition',
        children:[
          {
            title:'Real Time Clock',
            href:'?t=RTC',
          },
          {
            title:'SD Card',
            href:'?t=SDCard',
          },
          {
            title:'Ammeter',
            href:'?t=Ammeter',
          },
          {
            title:'Voltmeter',
            href:'?t=Voltmeter',
          },
        ]
      },
      {
        title:'Mini Oscilloscope',
        href:'?t=MiniOscilloscope',
      },
      {
        title:'Internet of Things',
        href:'?t=IOT',
        children:[
          {
            title:'Bluetooth',
            href:'?t=Bluetooth',
          },
          {
            title:'Wi-Fi',
            href:'?t=ESP',
          },
          {
            title:'XBee',
            href:'?t=Xbee',
          },
        ]
      },
      {
        title:'Menu Interface',
        href:'?t=Menu',
        children:[
          {
            title:'Control',
            href:'?t=Control',
          },
          {
            title:'Sensing',
            href:'?t=Sensing',
          },
          {
            title:'Serial Monitor',
            href:'?t=SerialMonitor',
          },
          {
            title:'Arduino Pin State Monitor',
            href:'?t=PinState',
          },
          {
            title:'User Defined Programs',
            href:'?t=UserDefinedPrograms',
          },
        ]
      },
      {
        title:'Beta Function Generator',
        href:'?t=FunctionGenerator',
      },
      {
        title:'Arduino Core Interface',
        href:'?t=ArduinoCoreInterface',
        children:[
          {
            title:'Digital I/O Pin',
            href:'?t=DigitalPin',
          },
          {
            title:'Analog Input Pins',
            href:'?t=AnalogPin',
          },
          {
            title:'PWM Pins',
            href:'?t=PWM',
          },
          {
            title:'Interrupt Pins',
            href:'?t=Interrupt',
          },
          {
            title:'Serial Pins',
            href:'?t=SerialPins',
          },
          {
            title:'3.3V I/O Pins',
            href:'?t=io3v3',
          },
          {
            title:'IIC',
            href:'?t=IIC',
          },
          {
            title:'SPI',
            href:'?t=SPI',
          },
        ]
      },
      {
        title:'Physical',
        href:'?t=Physical',
      },
    ]
  },
  {
    title:'Programming Interface',
    href:'?t=ProgrammingInterface',
    children:[
      {
        title:'Arduino IDE',
        href:'?t=Arduino',
      },
      {
        title:'Scratch',
        href:'?t=Scratch',
      },
      {
        title:'MATLAB',
        href:'https://in.mathworks.com/hardware-support/arduino-matlab.html',
      },
      {
        title:'LabVIEW',
        href:'?t=Labview',
      },
      {
        title:'ROS',
        href:'?http://wiki.ros.org/rosserial_arduino/Tutorials/Arduino%20IDE%20Setup',
      },
    ]
  },
  {
    title:'Circuit',
    href:'?t=eviveFritzing',
  },
  {
    title:'Learning Modules and Kits',
    href:'?t=LearningModules',
    children:[
      {
        title:'Basic Kit',
        href:'?t=BasicKit',
      },
      {
        title:'IOT Kit',
        href:'?t=IOTKit',
      },
      {
        title:'Ultimate Kit',
        href:'?t=UltimateKit',
      },
      {
        title:'Starter Kit',
        href:'?t=StarterKit',
      },
      {
        title:'Mobile Robot',
        href:'?t=MobileRobot',
      },
      {
        title:'Robotic Arm',
        href:'?t=RoboticArm',
      },
      {
        title:'Home Automation Kit',
        href:'?t=HomeAutomation',
      },
    ]
  },
  {
    title:'evive Firmware',
    href:'/eviveDocumentation/html/index.html',
    target:'_blank',
  },
  {
    title:'Resources',
    href:'?t=Resources',
  },
  {
    title:'Forum',
    href:'?t=Forum',
  },
];

var Tutorials = [
  {
    title:'Arduino Sketch Structure and Flow',
    description: 'This tutorial discuss the basic structure of an Arduino sketch and the top-to-bottom execution of program instructions.',
    imgSource: 'images/Arduino/A5.PNG',
    href:'?t=ArduinoStructureAndFlow',
  },
];