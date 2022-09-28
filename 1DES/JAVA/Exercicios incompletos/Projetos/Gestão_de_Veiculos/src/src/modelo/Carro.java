package src.modelo;

public class Carro extends Veiculo {
	private String tipo;
	private int passageiros;

	public Carro(String tipo, int passageiros, String placa, int anoModelo, int anoFabricacao, String modelo,
			String marca, double valor) {
		super(placa, anoModelo, anoFabricacao, modelo, marca, valor);
		this.tipo = tipo;
		this.passageiros = passageiros;
	}

	public void settipo(String tipo) {
		this.tipo = tipo;
	}
	
	public void setpassageiros(int passageiros) {
		this.passageiros = passageiros;
	}

	@Override
	public String toString() {
		return String.format("%s\t%d\t\t%s", tipo, passageiros , super.toString()); 
	}

}
