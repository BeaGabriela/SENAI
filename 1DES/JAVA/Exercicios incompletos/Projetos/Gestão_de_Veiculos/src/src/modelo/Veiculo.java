package src.modelo;

public class Veiculo {
	private String placa;
	private int anoModelo;
	private int anoFabricacao;
	private String modelo;
	private String marca;
	private double valor;
	
	public Veiculo(String placa, int anoModelo, int anoFabricacao, String modelo, String marca, double valor) {
		this.placa = placa;
		this.anoModelo = anoModelo;
		this.anoFabricacao = anoFabricacao;
		this.modelo = modelo;
		this.marca = marca;
		this.valor = valor;
		
		
	}

	@Override
	public String toString() {
		return  String.format("%s\t%d\t\t%d\t\t%s\t%s\t%.2f" ,placa ,anoModelo , anoFabricacao , modelo ,marca ,valor);
	}
	
}
