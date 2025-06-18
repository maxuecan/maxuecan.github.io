from machine import Pin, PWM
import time

class Servo180:

    def __init__(self, pin):
        self.servo_pin = Pin(pin)
        self.servo = PWM(pin)
        # set frequency
        self.freq = 50
        self.servo.freq(self.freq)

    # mapping the angle and duty
    def set_angle(self, angle):
        if angle < 8: angle = 8
        min_duty = 1150
        max_duty = 8200
        duty = int(min_duty + (angle / 180) * (max_duty - min_duty))
        self.servo.duty_u16(duty)
    
    def rotate_to_angle(self, target_angle, speed):
        self.set_angle(target_angle)
        time.sleep(speed)

class Servo360:

    def __init__(self, pin):
        self.servo_pin = Pin(pin)
        self.servo = PWM(pin)
        # set frequency
        self.freq = 50
        self.servo.freq(self.freq)

    def stop_servo(self):
        neutral_duty = 1500
        self.servo.duty_u16(int(neutral_duty * 65536 / 20000))

    # keep rotate,dir = 1 forward，-1 backward
    def rotate(self, speed, dir, rotate_time):
        # neutral duty(1.5ms)
        neutral_duty = 1500
        duty = neutral_duty + dir * int(speed * 1000)
        # duty_u16
        self.servo.duty_u16(int(duty * 65536 / 20000))
        if rotate_time > 0:
            time.sleep(rotate_time)
            self.stop_servo()

 




        
