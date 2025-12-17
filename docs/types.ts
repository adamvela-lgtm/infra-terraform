// types.ts
export interface TerraformConfig {
  provider: string;
  region: string;
  accessKey: string;
  secretKey: string;
}

export interface AwsInstance {
  id: string;
  type: string;
  ami: string;
  vpcSecurityGroupIds: string[];
  subnetId: string;
}

export interface AzureVm {
  id: string;
  name: string;
  resourceGroupName: string;
  location: string;
  size: string;
  osProfile: {
    computerName: string;
    adminUsername: string;
    adminPassword: string;
  };
  networkProfile: {
    networkInterfaces: {
      id: string;
    }[];
  };
}

export interface GcpInstance {
  id: string;
  name: string;
  machineType: string;
  zone: string;
  networkInterfaces: {
    network: string;
    subnetwork: string;
  }[];
}

export interface InfraResource {
  id: string;
  type: string;
  provider: string;
  properties: any;
}

export enum ProviderType {
  AWS = 'aws',
  AZURE = 'azure',
  GCP = 'gcp',
}

export interface InfraTerraformState {
  version: string;
  terraformVersion: string;
  serial: number;
  lineage: string;
  outputs: {
    [key: string]: any;
  };
  resources: InfraResource[];
}