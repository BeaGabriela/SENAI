package src.modelo;
import java.util.Date;

public class Funcionario extends Pessoa {
	private int matricula;
    private double comissao;
    
  
    
 public Funcionario(String nome, String telefone, Date nascimento , int matricula, int comissao) {
		super(nome, telefone, nascimento);
		this.comissao=comissao;
		this.matricula=matricula;
	
		}
 

public double getComissao() {
	return comissao;
}


public void setComissao(double comissao) {
	this.comissao = comissao;
}


@Override
public String toString() {
	return  super.toString() + "\t"  + matricula + "\t" + comissao;
}
		
 
 
}
