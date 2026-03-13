# --- VPC Variables ---
name_prefix          = "school-mis"
vpc_cidr             = "10.0.0.0/16"
aws_region           = "us-east-1"
public_subnet_cidrs  = ["10.0.1.0/24", "10.0.2.0/24"]
private_subnet_cidrs = ["10.0.10.0/24", "10.0.20.0/24"]
azs                  = ["us-east-1a", "us-east-1b"]

# --- Bastion Host Variables ---
ami_id           = "ami-0360c520857e3138f"
instance_type    = "t3.micro"
key_name         = "483829975256-us-east-1-keypair"
allowed_ssh_cidr = "0.0.0.0/0"

# --- EKS Variables ---
cluster_name = "school-mis-eks-cluster"
eks_version  = "1.34"
