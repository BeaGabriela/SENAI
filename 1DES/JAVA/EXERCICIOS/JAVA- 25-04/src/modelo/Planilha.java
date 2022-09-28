package modelo;

public class Planilha {
	private int v1;
	private int v2;
	private int v3;

	public Planilha(String entrada) {
		v1 = Integer.parseInt(entrada.split(";")[0]);
		v2 = Integer.parseInt(entrada.split(";")[1]);
		v3 = Integer.parseInt(entrada.split(";")[2]);
	}

	// Metodos para o Processamento
	public int adicao() {
		return v1 + v2 + v3;
	}

	public int multiplicacao() {
		return v1 * v2 * v3;
	}

	public int subtracao() {
		return v1 - v2 -v3;
	}

	public float divisao() {
		return (v1 / v2) /v3;
	}
}
