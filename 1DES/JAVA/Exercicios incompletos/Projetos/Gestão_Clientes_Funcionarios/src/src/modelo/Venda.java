package src.modelo;

import java.text.SimpleDateFormat;
import java.util.Date;
public class Venda {
	private static SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	private String codCliente;
	private String codFuncionario;
	private int valor;
	private Date data;
	private double comissao;

	public Venda(String codCliente, String codFuncionario, int valor, double comissao, Date data) {
		this.codCliente = codCliente;
		this.codFuncionario = codFuncionario;
		this.valor = valor;
		this.data = data;
		this.comissao = comissao;

	}

	public double getcomissao(double comissao) {
		double porcentagem = comissao / 100;
		return porcentagem;
	}

	public void setComissao(double comissao) {
		this.comissao = comissao;
	}

	public String getCodCliente() {
		return codCliente;
	}

	public void setCodCliente(String codCliente) {
		this.codCliente = codCliente;
	}

	public String getCodFuncionario() {
		return codFuncionario;
	}

	public void setCodFuncionario(String codFuncionario) {
		this.codFuncionario = codFuncionario;
	}

	public double getValor(double val) {
		val = valor * getcomissao(comissao);
		return valor + val;
	}

	public void setValor(int valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return codCliente + "\t\t\t" + codFuncionario + "\t\t\t" + valor + "\t" + getValor(0) + "\t\t "
				+ df.format(data);
	}

}
