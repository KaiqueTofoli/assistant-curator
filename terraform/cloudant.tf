###############################################################
#                                                             #
#                         CLOUDANT                            #
#                                                             #
###############################################################

data "ibm_cloudant" "cloudant" {
  count             = length(var.cloudant_name) > 0 ? 1 : 0
  resource_group_id = data.ibm_resource_group.group.id
  name              = var.cloudant_name
}

resource "ibm_cloudant" "cloudant" {
  count             = length(var.cloudant_name) > 0 ? 0 : 1
  name              = "cloudant-instance"
  location          = var.cloud_region
  plan              = var.has_lite_cloudant ? "standard" : "lite"
  resource_group_id = data.ibm_resource_group.group.id

  timeouts {
    create = "60m"
  }
}

resource "ibm_resource_key" "cloudant" {
  name                 = "cloudant_curator_key"
  role                 = "Manager"
  resource_instance_id = local.cloudant_id
}
