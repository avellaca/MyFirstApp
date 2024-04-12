from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hola_mundo():
    return jsonify({"mensaje": "Hola mundo!"})

if __name__ == "__main__":
    app.run(debug=True)
