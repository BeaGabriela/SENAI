package modelo;

public class Veiculo {

	public String placa;
	public String marca;
	public String modelo;
	public int anoModelo;
	public int anoFabricacao;
	public String cor;
	
	public Veiculo(){
		
	}
	
	public Veiculo(String placa, String marca, String modelo, int anoModelo , int anoFabricacao, String cor) {
		this.placa = placa;
		this.marca = marca;
		this.modelo = modelo;
		this.anoModelo = anoModelo;
		this.anoFabricacao = anoFabricacao;
		this.cor = cor;
		
	}
	public String paraString() {
		return placa+ "\t" + marca + "\t" + modelo + "\t" + anoModelo + "\t" +anoFabricacao + "\t" +cor;
	}
}
