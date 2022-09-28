package modelo;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Venda {

	private int codProduto;
	private String produto;
	private int qntProduto;
	private String data;
	private String vendedor;
	private double valor;
	private double desconto;
	private String cliente;
	private String generoRoupa;
	private double valorTotal;

	public Venda(int codProduto) {
		this.codProduto = codProduto;
	}

	public Venda(int codProduto, String vendedor, String data, String cliente, String produto, String generoRoupa,
			int qntProduto, double valor, double desconto, double valorTotal) {
		this.codProduto = codProduto;
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
		this.codProduto = Integer.parseInt(linha.split(";")[0]);
		this.vendedor = linha.split(";")[1];
		this.data = linha.split(";")[2];
		this.cliente = linha.split(";")[3];
		this.produto = linha.split(";")[4];
		this.generoRoupa = linha.split(";")[5];
		this.qntProduto = Integer.parseInt(linha.split(";")[6]);
		this.valor = Double.parseDouble(linha.split(";")[7]);
		this.desconto = Double.parseDouble(linha.split(";")[8]);
		this.valorTotal = Double.parseDouble(linha.split(";")[9]);
	}

	public Venda() {
		// TODO Auto-generated constructor stub
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

	public String getQntProduto(String s) {
		return String.format("%d", qntProduto);
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

	public String getValor(String s) {
		return String.format("%.2f", valor);
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public double getDesconto() {
		return desconto;
	}

	public String getDesconto(String s) {
		return String.format("%.0f", desconto);
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

	public int getcodProduto() {
		return codProduto;
	}

	public String getcodProduto(String s) {
		return String.format("%d", codProduto);
	}

	public void setcodProduto(int codProduto) {
		this.codProduto = codProduto;
	}

	public double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(double valorTotal) {
		this.valorTotal = valorTotal;
	}

	public void setGeneroRoupa(String generoRoupa) {
		this.generoRoupa = generoRoupa;
	}

	public double getvalorTotal() {
		return valorTotal;
	}

	public void setvalorTotal() {
		valorTotal = (valor * qntProduto * desconto) / 100;
	}

	@Override
	public String toString() {
		return codProduto + "\t" + vendedor + "\t" + data + "\t" + cliente + "\t" + produto + "\t" + generoRoupa + "\t"
				+ qntProduto + "\t" + valor + "\t" + desconto + "\t"
				+ String.format("%.2f", valorTotal).replace(",", ".");
	}

	public String tocsv() {
		return codProduto + ";" + vendedor + ";" + data + ";" + cliente + ";" + produto + ";" + generoRoupa + ";"
				+ qntProduto + ";" + valor + ";" + desconto + ";" + String.format("%.2f", valorTotal).replace(",", ".");
	}

	public String toRelatorio() {
		// TODO Auto-generated method stub
		return null;
	}

	public void setNum(int parseInt) {
		// TODO Auto-generated method stub

	}

}
