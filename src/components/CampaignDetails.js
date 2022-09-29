import React from "react";
import {
  Divider,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Grid,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
class CampaignDetails extends React.Component {
  state = {
    sku1: "",
    sku2: "",
    biddingStrategy: "",
    dailyBudget: 0,
    defaultBid: 0,
    topOfSearch: 0,
    productPages: 0,
  };

  currencies = [
    {
      value: "wasif",
      label: "hero",
    },
  ];

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div
        style={{
          margin: "auto",
          width: "50%",
          border: "3px solid black",
          padding: "20px",
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Campaign Details
          </Typography>
          <Divider />
          <Typography variant="subtitle1" gutterBottom>
            SKU
          </Typography>
          <Grid
            container
            alignItems="center"
            direction="column"
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item>
              <TextField
                sx={{ width: 245 }}
                style={{ margin: "10px" }}
                id="outlined-basic"
                name="sku1"
                label="SKU 1"
                variant="outlined"
                value={this.state.sku1}
                onChange={this.handleChange}
              />
              <TextField
                sx={{ width: 245 }}
                style={{ margin: "10px" }}
                id="outlined-basic"
                name="sku2"
                label="SKU 2"
                variant="outlined"
                value={this.state.sku2}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item>
              <CurrencyTextField
                style={{ margin: "10px 10px 10px 5px", width: "245px" }}
                label="Daily Budget"
                name="dailyBudget"
                variant="standard"
                value={this.state.dailyBudget}
                currencySymbol="$"
                //minimumValue="0"
                outputFormat="string"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={this.handleChange}
              />
              <CurrencyTextField
                style={{ margin: "10px 0px 10px 10px", width: "245px" }}
                label="Default Bid"
                name="defaultBid"
                variant="standard"
                value={this.state.defaultBid}
                currencySymbol="$"
                //minimumValue="0"
                outputFormat="string"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={this.handleChange}
              />
            </Grid>
            <Grid>
              <TextField
                style={{ margin: "20px 20px 20px 10px" }}
                id="outlined-basic"
                name="topOfSearch"
                value={this.state.topOfSearch}
                label="Top of Search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                onChange={this.handleChange}
              />
              <TextField
                style={{ margin: "20px 0px 0px 0px" }}
                id="outlined-basic"
                name="productPages"
                value={this.state.productPages}
                label="Product Pages"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
                onChange={this.handleChange}
              />
            </Grid>
            <TextField
              style={{ margin: "10px" }}
              id="outlined-select-currency"
              name="biddingStrategy"
              select
              label="Bidding Stategy"
              value={this.state.biddingStrategy}
              variant="outlined"
              onChange={this.handleChange}
              helperText="Please select your bidding strategy"
            >
              {this.currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default CampaignDetails;
