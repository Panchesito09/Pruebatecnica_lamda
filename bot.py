import pyautogui
import time

def Cargadocumento():
    # Abre Chrome
    pyautogui.hotkey('win')
    pyautogui.write('chrome')
    pyautogui.press('enter')
    time.sleep(3)  # Espera a que Chrome se abra

    # Busca DANE en la barra de búsqueda
    pyautogui.write('https://www.dane.gov.co/files/operaciones/PM/cp-PM-2023.pdf')
    pyautogui.press('enter')
    time.sleep(3)  # Espera a que los resultados se carguen
    pyautogui.hotkey('ctrl', 's')
    time.sleep(2)
    pyautogui.press('enter')
    time.sleep(2)
    pyautogui.hotkey('alt', 'f4')
    time.sleep(3)
    pyautogui.click(689, 521)
    time.sleep(2)
    pyautogui.write('cp-PM-2023')
    pyautogui.press('enter')
    time.sleep(2)
    pyautogui.click(785, 572)

# Llama a la función para ejecutar el script
Cargadocumento()
