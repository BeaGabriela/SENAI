package src.modelo;

import java.util.Date;

public class Cliente extends Pessoa {
	private int id;
	private double creditoLimite;
	
	public Cliente(String nome, String telefone, Date nascimento, int id, double creditoLimite) {
		super(nome, telefone, nascimento);
		this.id = id;
		this.creditoLimite = creditoLimite;
	}


	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getcreditoLimite(double limite) {
		limite =0;
		if(creditoLimite < limite) {
			String a = "N�o foi poss�vel realizar tal trabalho.";
			return a;
			
		}else {
			String a ="Servi�o realizado com sucesso.";
			return a;
		}
		
	}

	public void setCreditoLimite(double creditoLimite) {
		this.creditoLimite = creditoLimite;
	}
	
	

	@Override
	public String toString() {
		return super.toString() + "\t"  + id + "\t" + creditoLimite+"\n" +  getcreditoLimite(0);
	}
	
}
