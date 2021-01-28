//% color="#AA278D"
namespace FXZ {
    /**
     * This is a circle path catch block
     */
    //% block
    export function circlePathCatch() {
        //  -1
        startbit.startbit_setMotorSpeed(100, 90)
        basic.pause(800)
        //  0
        startbit.startbit_setMotorSpeed(0, 0)
        startbit.setServo(startbit.startbit_servorange.range1, 3, 120, 500)
        basic.pause(1000)
        startbit.setServo(startbit.startbit_servorange.range1, 2, 40, 500)
        basic.pause(700)
        startbit.setServo(startbit.startbit_servorange.range1, 3, 70, 500)
        basic.pause(700)
        startbit.setServo(startbit.startbit_servorange.range1, 2, 90, 500)
        basic.pause(500)
        //  1
        startbit.startbit_setMotorSpeed(100, 90)
        basic.pause(3000)
        //  2
        startbit.startbit_setMotorSpeed(30, 90)
        basic.pause(2000)
        //  3
        startbit.startbit_setMotorSpeed(100, 90)
        basic.pause(1000)
        //  4
        startbit.startbit_setMotorSpeed(100, 30)
        basic.pause(7000)
        //  5
        startbit.startbit_setMotorSpeed(100, 90)
        basic.pause(2500)
        //  6
        startbit.startbit_setMotorSpeed(40, 90)
        basic.pause(7700)
        //  7
        startbit.startbit_setMotorSpeed(100, 90)
        basic.pause(5000)
        //  8
        startbit.startbit_setMotorSpeed(0, 0)
        startbit.setServo(startbit.startbit_servorange.range1, 3, 150, 500)
        startbit.setServo(startbit.startbit_servorange.range1, 2, 40, 500)
        //  放下
        basic.pause(700)
        startbit.setServo(startbit.startbit_servorange.range1, 3, 120, 500)
        basic.pause(1500)
        startbit.setServo(startbit.startbit_servorange.range1, 2, 90, 500)
        basic.pause(500)
        startbit.setServo(startbit.startbit_servorange.range1, 3, 90, 500)
        basic.pause(700)
        startbit.startbit_setMotorSpeed(-100, 100)
        basic.pause(650)
        startbit.startbit_setMotorSpeed(0, 0)
        //  9
        startbit.startbit_setMotorSpeed(100, 90)
        basic.pause(12000)
        startbit.startbit_setMotorSpeed(0, 0)
    }

    /**
     * This is a my radio receive number block
     */
    //% block
    export function myRadioReceiveNumber() {
        if (receivedNumber == 1) {
            startbit.startbit_setMotorSpeed(100, -100)
        } else if (receivedNumber == 2) {
            startbit.startbit_setMotorSpeed(-100, 100)
        } else if (receivedNumber == 3) {
            startbit.startbit_setMotorSpeed(-100, -100)
        } else if (receivedNumber == 4) {
            startbit.startbit_setMotorSpeed(100, 100)
        } else if (receivedNumber == 5) {
            startbit.startbit_setMotorSpeed(0, 0)
        } else if (receivedNumber == 6) {
            舵机1角度 += 1
            if (舵机1角度 > 180) {
                舵机1角度 = 180
            }

            startbit.setServo(startbit.startbit_servorange.range1, 1, 舵机1角度, 0)
        } else if (receivedNumber == 7) {
            舵机1角度 += -1
            if (舵机1角度 < 0) {
                舵机1角度 = 0
            }

            startbit.setServo(startbit.startbit_servorange.range1, 1, 舵机1角度, 0)
        } else if (receivedNumber == 8) {
            舵机2角度 += -1
            if (舵机2角度 < 限位1) {
                舵机2角度 = 限位1
            }

            startbit.setServo(startbit.startbit_servorange.range1, 2, 舵机2角度, 0)
        } else if (receivedNumber == 9) {
            舵机2角度 += 1
            if (舵机2角度 > 限位2) {
                舵机2角度 = 限位2
            }

            startbit.setServo(startbit.startbit_servorange.range1, 2, 舵机2角度, 0)
        } else if (receivedNumber == 10) {
            circle_path_catch()
        } else if (receivedNumber == 13) {

        }
    }

    /**
         * This is a init block
         */
    //% block
    export function init() {
        startbit.setServo(startbit.startbit_servorange.range1, 1, 90, 1000)
        startbit.setServo(startbit.startbit_servorange.range1, 2, 90, 1000)
        startbit.setServo(startbit.startbit_servorange.range1, 3, 90, 1000)
        basic.pause(500)
    }


}
