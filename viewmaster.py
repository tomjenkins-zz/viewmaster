""" Viewmaster.py by Tom Jenkins on 3-8-2013
based on NES-exit.py by Eric Conner
GPIO Keyboard driver for Raspberry Pi for use with external reset button on NES
"""
import uinput
import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BOARD)

pin_esc = 3

# esc, h, f2, f3, f6, f7, p
GPIO.setup(pin_esc, GPIO.IN, pull_up_down=GPIO.PUD_UP)

events = (uinput.KEY_ESC)

device = uinput.Device(events)

# Bools to keep track of movement
key_esc = False

while True:
  if (not key_esc) and (not GPIO.input(pin_esc)):  # ESC button pressed
    key_esc = True
    device.emit(uinput.KEY_ESC, 1)
  if key_esc and GPIO.input(pin_esc):              # ESC button released
    key_esc = False
    device.emit(uinput.KEY_ESC, 0) 

  time.sleep(.1)  # Poll every 100ms (otherwise CPU load gets too high)