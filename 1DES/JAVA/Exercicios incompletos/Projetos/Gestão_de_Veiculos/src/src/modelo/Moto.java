package src.modelo;

public class Moto  extends Veiculo {
	private int cilindradas;


	public Moto(int cilindradas, String placa, int anoModelo, int anoFabricacao, String modelo, String marca, double valor) {
		super( placa,anoModelo, anoFabricacao, modelo, marca, valor);
		this.cilindradas = cilindradas;
	}
	public void setcilindradas (int cilindradas) {
		this.cilindradas = cilindradas;
	}

	@Override
	public String toString() {
		return String.format("%d\t  %s" ,cilindradas , super.toString());
	}

}
