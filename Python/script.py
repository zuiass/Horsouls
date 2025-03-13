import sys
import random
from PySide6.QtWidgets import QApplication, QWidget, QVBoxLayout, QLineEdit, QPushButton, QLabel, QMessageBox
from PySide6.QtGui import QFont
from PySide6.QtCore import Qt

# Lista de palavras para o jogo
PALAVRAS = ["falar", "canto", "nuvem", "prato", "vento"]

class TermoGame(QWidget):
    def __init__(self):
        super().__init__()
        self.palavra_correta = random.choice(PALAVRAS)
        self.tentativas = 0
        self.max_tentativas = 6

        self.initUI()
    
    def initUI(self):
        self.setWindowTitle("Termo - PySide6")
        self.setGeometry(100, 100, 300, 400)

        self.setStyleSheet("""
            QWidget {
                background-color: #2b2b2b;
                color: white;
                font-family: Arial;
            }
            QLabel {
                font-size: 16px;
            }
            QLineEdit {
                background: #3c3c3c;
                border: 2px solid #555;
                color: white;
                font-size: 18px;
                padding: 5px;
                border-radius: 5px;
                text-transform: uppercase;
            }
            QPushButton {
                background-color: #008CBA;
                color: white;
                font-size: 16px;
                border-radius: 5px;
                padding: 8px;
            }
            QPushButton:hover {
                background-color: #005f75;
            }
        """)

        self.layout = QVBoxLayout()
        
        self.label_info = QLabel("Digite uma palavra de 5 letras:")
        self.label_info.setFont(QFont("Arial", 12))
        self.layout.addWidget(self.label_info)
        
        self.input_text = QLineEdit()
        self.input_text.setMaxLength(5)
        self.input_text.setFont(QFont("Arial", 14))
        self.input_text.setAlignment(Qt.AlignCenter)
        self.layout.addWidget(self.input_text)
        
        self.btn_tentar = QPushButton("Tentar")
        self.btn_tentar.clicked.connect(self.verificar_palavra)
        self.layout.addWidget(self.btn_tentar)
        
        self.resultados = []
        for _ in range(self.max_tentativas):
            label = QLabel("-----")
            label.setFont(QFont("Arial", 18))
            label.setAlignment(Qt.AlignCenter)
            label.setStyleSheet("border: 2px solid #555; padding: 5px; background: #3c3c3c; border-radius: 5px;")
            self.layout.addWidget(label)
            self.resultados.append(label)
        
        self.setLayout(self.layout)

    def verificar_palavra(self):
        palavra = self.input_text.text().lower()
        if len(palavra) != 5:
            QMessageBox.warning(self, "Erro", "A palavra deve ter 5 letras!")
            return
        
        if self.tentativas >= self.max_tentativas:
            QMessageBox.information(self, "Fim de jogo", f"Você perdeu! A palavra era {self.palavra_correta}")
            self.close()
            return
        
        resultado = ""
        for i, letra in enumerate(palavra):
            if letra == self.palavra_correta[i]:
                resultado += f"<span style='color: lime; font-weight: bold;'>{letra}</span>"
            elif letra in self.palavra_correta:
                resultado += f"<span style='color: orange; font-weight: bold;'>{letra}</span>"
            else:
                resultado += f"<span style='color: gray;'>{letra}</span>"
        
        self.resultados[self.tentativas].setText(f"<html>{resultado}</html>")
        self.tentativas += 1
        
        if palavra == self.palavra_correta:
            QMessageBox.information(self, "Parabéns!", "Você acertou a palavra!")
            self.close()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    jogo = TermoGame()
    jogo.show()
    sys.exit(app.exec())