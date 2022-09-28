package modelo;

public class Cao extends Animal {
	private int qtdMotoqueirosAtacados;

	public Cao( String especie, String nome, float peso, String raca, int qtdMotoqueirosAtacados)  {
		super(especie, nome, peso, raca);
		this.qtdMotoqueirosAtacados = qtdMotoqueirosAtacados;
	}

	@Override
	public String toString() {
		return qtdMotoqueirosAtacados + "\t"+ super.toString();
		
	}
	

}
