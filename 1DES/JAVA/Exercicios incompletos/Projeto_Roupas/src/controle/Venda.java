package controle;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Venda {
	
	private String produto;
	private int qntProduto;
	private String data;
	private String vendedor;
	private double valor;
	private double desconto;
	private String cliente;
	private String generoRoupa;
	private double valorTotal;
	
	

	public Venda(String vendedor, String data, String cliente, String produto, String generoRoupa) {
		this.vendedor = vendedor;
		this.data = data;
		this.cliente = cliente;
		this.produto = produto;
		this.generoRoupa = generoRoupa;
		this.qntProduto = qntProduto;
		this.valor = valor;
		this.desconto = desconto;
		this.valorTotal = valorTotal;
	}

	public Venda(String linha) {
		this.vendedor = linha.split(";")[0];
		this.data = linha.split(";")[1];
		this.cliente = linha.split(";")[2];
		this.produto = linha.split(";")[3];
		this.generoRoupa = linha.split(";")[4];
		this.qntProduto = Integer.parseInt(linha.split(";")[5]);
		this.valor = Double.parseDouble(linha.split(";")[6]);
		this.desconto = Double.parseDouble(linha.split(";")[7]);
		this.valorTotal = Double.parseDouble(linha.split(";")[8]);
	}

	public String getProduto() {
		return produto;
	}

	public void setProduto(String produto) {
		this.produto = produto;
	}

	public int getQntProduto() {
		return qntProduto;
	}

	public void setQntProduto(int qntProduto) {
		this.qntProduto = qntProduto;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getVendedor() {
		return vendedor;
	}

	public void setVendedor(String vendedor) {
		this.vendedor = vendedor;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public double getDesconto() {
		return desconto;
	}

	public void setDesconto(double desconto) {
		this.desconto = desconto;
	}

	public String getCliente() {
		return cliente;
	}

	public void setCliente(String cliente) {
		this.cliente = cliente;
	}

	public String getGeneroRoupa() {
		return generoRoupa;
	}

	public void setGeneroRoupa(String generoRoupa) {
		this.generoRoupa = generoRoupa;
	}
	
	public double getvalorTotal() {
		return valorTotal;
	}
	
	public void setvalorTotal() {
		valorTotal = (valor * qntProduto  * desconto) / 100;
	}



	@Override
	public String toString() {
		return  vendedor + "\t" + data + "\t" + cliente + "\t" + produto + "\t" + generoRoupa + "\t" + qntProduto + "\t" + valor + "\t" + desconto + "\t" + valorTotal;
	}
	
	public String tocsv() {
		return vendedor + ";" + data + ";" + cliente + ";" + produto + ";" + generoRoupa + ";" + qntProduto + ";" + valor + ";" + desconto + ";" + valorTotal;
	}
	
}