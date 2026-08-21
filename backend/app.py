from flask import Flask, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_db_connection():
    connection = mysql.connector.connect(
        host="gateway01.eu-central-1.prod.aws.tidbcloud.com",
        port=4000,
        user="4YczBAy4EkXu3NC.root",
        password="fCcjJNKn8xTatYCF",
        database="tpsi_shop"
    )

    return connection


@app.route("/test-db")
def test_db():
    connection = get_db_connection()

    if connection.is_connected():
        connection.close()

        return jsonify({
            "message": "Connessione al database riuscita!"
        })

    return jsonify({
        "message": "Connessione fallita"
    }), 500


@app.route("/api/prodotti")
def get_prodotti():
    connection = get_db_connection()

    cursor = connection.cursor()

    query = """
        SELECT
            id,
            nome,
            prezzo,
            ROUND(prezzo * 1.22, 2) AS prezzo_ivato
        FROM prodotti
    """
    cursor.execute(query)

    records = cursor.fetchall()

    prodotti = []
    for record in records:
        prodotto = {
            "id": record[0],
            "nome": record[1],
            "prezzo": float(record[2]),
            "prezzo_ivato": float(record[3])
        }

        prodotti.append(prodotto)

    cursor.close()
    connection.close()
    return jsonify(prodotti)



@app.route("/api/prodotti/<int:id>")
def get_prodotto(id):
    connection = get_db_connection()

    cursor = connection.cursor()

    query = """
        SELECT
            id,
            nome,
            prezzo,
            ROUND(prezzo * 1.22, 2) AS prezzo_ivato
        FROM prodotti
        WHERE id = %s
    """
    cursor.execute(query, (id,))

    record = cursor.fetchone()
    if record is None:
        cursor.close()
        connection.close()

        return jsonify({
            "message": "Prodotto non trovato"
        }), 404

    prodotto = {
        "id": record[0],
        "nome": record[1],
        "prezzo": float(record[2]),
        "prezzo_ivato": float(record[3])
    }

    cursor.close()
    connection.close()

    return jsonify(prodotto)


if __name__ == "__main__":
    app.run(debug=True)